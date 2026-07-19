import SignOutButton from "@/components/ui/SignOutButton";
import Link from "next/link";
import { MdBlock } from "react-icons/md";

function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <MdBlock className="text-5xl text-red-600" />
        </div>

        <h1 className="mt-8 text-3xl font-bold text-gray-900">
          Account Suspended
        </h1>

        <p className="mt-4 text-gray-600">
          Your account has been temporarily suspended by an administrator.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          While your account is suspended, you cannot access dashboards,
          register for events, create events, or use other platform features.
        </p>

        <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-medium text-red-700">
            If you believe this is a mistake, please contact the platform
            administrator for assistance.
          </p>
        </div>

        <div className="mt-10">
          <SignOutButton />
        </div>
      </div>
    </main>
  );
}

export default Page;
