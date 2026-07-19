import Link from "next/link";

import Button from "./Button";
import Image from "next/image";

function ProfileInfoNavbar({ user }) {
  return (
    <div className="flex w-fit gap-2">
      {user ? (
        <Link href="profile" className="flex items-center gap-4">
          <div className="2xs:h-10 2xs:w-10 relative aspect-square h-8 w-8 cursor-pointer overflow-hidden rounded-full">
            <Image
              fill
              className="absolute top-0 right-0 rounded-full"
              src={user.avatar}
              alt="User avatar"
            />
          </div>
          <div className="2xs:gap-1 flex flex-col">
            <div className="2xs:text-base w-fit cursor-pointer text-sm font-semibold">
              {user.fullName}
            </div>
            <div className="2xs:text-xs text-[10px] font-bold text-[var(--text-secondary)] uppercase">
              {user.role}
            </div>
          </div>
        </Link>
      ) : (
        <Button className="px-6 py-5 text-lg" to="/login" type="primary">
          Sign in
        </Button>
      )}
    </div>
  );
}

export default ProfileInfoNavbar;
