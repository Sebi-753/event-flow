"use client";
import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { updateProfileAction } from "@/lib/actions";
import { FaCamera } from "react-icons/fa";
import { supabase } from "@/lib/supabase";

export default function ProfileFormClient({ currentUser }) {
  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState(null);

  async function onSubmit(formData) {
    const confirmed = confirm("Are you sure you want to update your profile?");

    if (!confirmed) return;

    let avatarUrl = currentUser.avatar;

    if (selectedFile) {
      const fileName = `public/${Date.now()}-${selectedFile.name}`;

      const { error } = await supabase.storage
        .from("avatars")
        .upload(fileName, selectedFile);

      if (error) {
        toast.error(error.message);
        return;
      }

      const { data } = supabase.storage.from("avatars").getPublicUrl(fileName);

      avatarUrl = data.publicUrl;
    }

    // Create a NEW FormData
    const data = new FormData();

    data.append("fullName", formData.get("fullName"));
    data.append("bio", formData.get("bio"));
    data.append("avatar", avatarUrl);

    // Send THIS instead of the original formData
    const result = await updateProfileAction(data);

    if (result.success) {
      toast.success("Profile successfuly updated");
      router.refresh();
    } else {
      toast.error("Failed to update the profile");
    }
  }

  return (
    <form
      action={onSubmit}
      className="mt-8 flex flex-col gap-8 text-sm sm:mt-16 sm:text-base"
    >
      <div className="flex w-full flex-col gap-2 rounded-2xl bg-white px-8 py-6 shadow-md">
        <div className="xs:text-start text-center text-sm font-semibold">
          Profile Photo
        </div>
        <div className="xs:flex-row flex flex-col items-center gap-6">
          <div className="relative aspect-square w-14 overflow-hidden rounded-full sm:w-16 md:w-20 lg:w-24">
            <Image
              src={currentUser.avatar}
              alt="Photo of user"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <label className="flex cursor-pointer items-center gap-2 rounded-2xl border border-gray-300 px-4 py-2 text-gray-500 hover:bg-gray-50">
              <FaCamera className="text-[var(--text-disabled)]" />

              <span className="text-[var(--text-disabled)]">Upload photo</span>

              <input
                type="file"
                name="avatar"
                accept="image/*"
                className="hidden"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 rounded-2xl bg-white px-8 py-6 shadow-md">
        <h1 className="2xs:text-base mb-6 text-sm font-semibold">
          Personal Information
        </h1>

        <label htmlFor="fullname">Full name</label>
        <input
          name="fullName"
          id="fullName"
          type="text"
          defaultValue={currentUser.fullName}
          className="w-full rounded-2xl border border-gray-300 px-4 py-2 xl:w-[50%]"
        />

        <label htmlFor="email" className="mt-6">
          Email address
        </label>
        <input
          name="email"
          id="email"
          type="text"
          disabled={true}
          defaultValue={currentUser.email}
          className="w-full cursor-not-allowed rounded-2xl border border-gray-300 px-4 py-2 text-xs text-[var(--text-disabled)] sm:text-base xl:w-[50%]"
        />
        <label htmlFor="bio" className="mt-6">
          Bio
        </label>
        <input
          name="bio"
          id="bio"
          type="text"
          defaultValue={currentUser.bio || "No bio yet"}
          className="w-full rounded-2xl border border-gray-300 px-4 py-2 xl:w-[50%]"
        />
        <div className="flex justify-end">
          <button className="mt-6 flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[var(--color-primary)] px-4 py-2 text-base font-semibold text-[var(--text-inverse)] transition duration-300 hover:bg-[var(--color-primary-hover)] md:w-fit md:text-lg">
            Save changes
          </button>
        </div>
      </div>
    </form>
  );
}
