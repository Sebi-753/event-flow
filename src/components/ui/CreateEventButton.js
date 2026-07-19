import Link from "next/link";

function CreateEventButton() {
  return (
    <Link
      className="inline-flex w-fit items-center gap-2 rounded-xl border border-transparent bg-[var(--color-primary)] px-4 py-2 font-medium text-[var(--text-inverse)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-md active:translate-y-0"
      href={"/dashboard/newEvent"}
    >
      + Create event
    </Link>
  );
}

export default CreateEventButton;
