function ProfileInfoNavbarSkeleton({ user }) {
  if (!user) {
    return <div className="h-10 w-28 animate-pulse rounded-xl bg-gray-200" />;
  }
  return (
    <div className="flex w-fit animate-pulse items-center gap-4">
      {/* Avatar */}
      <div className="2xs:h-10 2xs:w-10 h-8 w-8 rounded-full bg-gray-200" />

      {/* Name + Role */}
      <div className="flex flex-col gap-2">
        <div className="h-4 w-24 rounded bg-gray-200" />
        <div className="h-3 w-14 rounded bg-gray-200" />
      </div>
    </div>
  );
}

export default ProfileInfoNavbarSkeleton;
