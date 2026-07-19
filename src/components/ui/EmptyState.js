function EmptyState({ title, description, action }) {
  return (
    <div className="xs:px-10 flex flex-col items-center justify-center rounded-2xl border-gray-300 bg-white px-6 px-8 py-16 pt-30 text-center sm:px-20 md:px-30">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-2 max-w-md text-[var(--text-secondary)]">
        {description}
      </p>

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
export default EmptyState;
