function SidebarSkeleton() {
  return (
    <aside className="hidden h-screen animate-pulse border-r border-gray-200 bg-white md:flex md:flex-col">
      {/* Logo */}
      <div className="border-b border-gray-200 px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gray-200" />
          <div className="h-4 w-24 rounded bg-gray-200" />
        </div>
      </div>

      {/* Profile */}
      <div className="border-b border-gray-200 px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gray-200" />

          <div className="flex flex-col gap-2">
            <div className="h-4 w-28 rounded bg-gray-200" />
            <div className="h-3 w-16 rounded bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-1 flex-col gap-3 px-4 pt-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-2xl px-4 py-3"
          >
            <div className="h-5 w-5 rounded bg-gray-200" />
            <div className="h-4 w-28 rounded bg-gray-200" />
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 px-5 py-5">
        <div className="h-10 rounded-xl bg-gray-200" />
      </div>
    </aside>
  );
}

export default SidebarSkeleton;
