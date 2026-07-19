export default function ProgressBar({
  value = 0,
  max = 100,
  width = "100%",
  height,
}) {
  const width2 = `${Math.min((value / max) * 100, 100)}%`;

  return (
    <div
      className="h-2 w-full rounded-full bg-gray-200"
      style={{ width, height }}
    >
      <div
        className="h-full rounded-full bg-blue-500"
        style={{ width: width2 }}
      />
    </div>
  );
}
