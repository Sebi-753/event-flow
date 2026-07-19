import SignInButton from "@/components/ui/SignInButton";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center p-[2rem] md:block md:min-h-0 md:p-0">
      <div className="w-full max-w-md rounded-xl bg-[var(--color-bg)] px-6 py-10 shadow-sm sm:px-8 md:mx-auto md:mt-32 md:px-10">
        <header className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">Welcome back</h2>

          <h3 className="text-sm text-[var(--text-tertiary)] sm:text-base">
            Sign in to your EventFlow account
          </h3>
        </header>

        <div className="mt-8 flex w-full justify-center">
          <SignInButton />
        </div>
      </div>
    </div>
  );
}
