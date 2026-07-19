function ProfileSkeleton() {
  return (
    <section className="xs:px-30 animate-pulse bg-[var(--bg-secondary)] px-10 py-25 md:px-50 xl:px-80">
      {/* Header */}
      <header className="flex w-full flex-col items-center gap-2 text-center md:items-start md:text-start">
        <div className="2xs:h-8 h-7 w-48 rounded bg-gray-200 md:w-56" />

        <div className="2xs:h-4 h-3 w-64 rounded bg-gray-200 sm:w-80 md:w-96" />
      </header>

      <div className="mt-8 flex flex-col gap-8 sm:mt-16">
        {/* Photo Card */}
        <div className="rounded-2xl bg-white px-8 py-6 shadow-md">
          <div className="mb-6 h-5 w-32 rounded bg-gray-200" />

          <div className="xs:flex-row flex flex-col items-center gap-6">
            <div className="h-24 w-24 rounded-full bg-gray-200" />

            <div className="h-10 w-40 rounded-2xl bg-gray-200" />
          </div>
        </div>

        {/* Personal Info */}
        <div className="rounded-2xl bg-white px-8 py-6 shadow-md">
          <div className="mb-8 h-5 w-44 rounded bg-gray-200" />

          {/* Full name */}
          <div className="mb-2 h-4 w-24 rounded bg-gray-200" />
          <div className="h-11 w-full rounded-2xl bg-gray-200 xl:w-1/2" />

          {/* Email */}
          <div className="mt-6 mb-2 h-4 w-32 rounded bg-gray-200" />
          <div className="h-11 w-full rounded-2xl bg-gray-200 xl:w-1/2" />

          {/* Bio */}
          <div className="mt-6 mb-2 h-4 w-12 rounded bg-gray-200" />
          <div className="h-11 w-full rounded-2xl bg-gray-200 xl:w-1/2" />

          <div className="mt-8 flex justify-end">
            <div className="h-11 w-full rounded-2xl bg-gray-200 md:w-40" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSkeleton;
