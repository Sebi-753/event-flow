function Stat({ title, icon: Icon, value }) {
  return (
    <li className="xs:px-4 flex h-36 flex-col justify-between rounded-2xl border border-gray-200 bg-white px-2 py-3 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:gap-0 sm:text-start">
        <div className="rounded-xl bg-[var(--color-blue-100)] p-2">
          <Icon className="text-xl text-blue-600 md:text-2xl" />
        </div>

        <h3 className="xs:text-sm 2xs:text-xs text-[10px] text-[var(--text-secondary)]">
          {title}
        </h3>
      </div>

      <p className="text-center text-xl font-semibold sm:text-start sm:text-2xl">
        {value}
      </p>
    </li>
  );
}

export default Stat;
