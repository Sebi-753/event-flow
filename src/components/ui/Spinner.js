export default function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="h-20 w-20 animate-spin rounded-full border-4 border-gray-300 border-t-indigo-600" />
    </div>
  );
}
