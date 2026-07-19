import Image from "next/image";

function AccountDetailsSidebar({ user }) {
  let roleColors = "";
  if (user.role === "organizer")
    roleColors =
      "text-[var(--color-blue-700)] border-[var(--color-blue-400)]  bg-[var(--color-blue-100)]";
  else if (user.role === "admin")
    roleColors =
      "text-[var(--color-red-700)] border-[var(--color-red-400)] bg-[var(--color-red-100)]";

  const statusStyles =
    user.status === "active"
      ? "bg-green-100 text-green-700 border-green-200"
      : "bg-red-100 text-red-700 border-red-200";
  return (
    <>
      <div className="relative aspect-square h-10 w-10 overflow-hidden rounded-full">
        <Image
          src={user.avatar}
          fill
          className="object-cover"
          alt="Image of user"
        />
      </div>

      <div className="flex flex-col gap-1 text-sm">
        <span className="font-bold">{user.fullName}</span>

        <div className="flex items-center gap-2">
          <p
            className={`${roleColors} w-fit rounded-2xl border px-2 py-1 text-xs font-semibold uppercase shadow-sm`}
          >
            {user.role}
          </p>
          <span
            className={`${statusStyles} w-fit rounded-2xl border px-2 py-1 text-xs font-semibold uppercase shadow-sm`}
          >
            {user.status}
          </span>
        </div>
      </div>
    </>
  );
}

export default AccountDetailsSidebar;
