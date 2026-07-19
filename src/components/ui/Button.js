import Link from "next/link";

function Button({ children, type, to, className }) {
  let style = "";

  if (type === "primary")
    style =
      "text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]";
  if (type === "secondary")
    style =
      "text-[var(--text-secondary)] hover:text-black hover:bg-[var(--color-slate-200)] ";
  if (type === "cta")
    style =
      "hover:border-2 hover:border-white hover:text-[var(--text-inverse)] hover:bg-[var(--color-primary-hover)] w-[15rem] h-[3rem] text-xl bg-white text-[var(--text-primary)] transition duration-300";

  return (
    <button
      className={`${style} ${className} xxs:px-6 xxs:py-5 flex h-6 w-30 items-center justify-center rounded-xl px-4 py-3 text-base font-bold transition duration-150`}
    >
      <Link href={to}>{children}</Link>
    </button>
  );
}

export default Button;
