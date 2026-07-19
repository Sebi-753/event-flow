import Button from "@/components/ui/Button";

function CTASection() {
  return (
    <section className="bg-[var(--color-primary)] p-10 text-[var(--text-inverse)] sm:p-20">
      <header className="flex flex-col gap-4 text-center">
        <h2 className="xs:text-3xl text-2xl font-bold">
          Ready to host your next event?
        </h2>
        <h3 className="xs:text-xl text-sm text-[var(--text-disabled)]">
          Join 3,200+ organizers who trust EventFlow to manage their events
          end-to-end.
        </h3>
      </header>
      <main className="mt-16 flex justify-center">
        <Button type="cta" to={"/events"}>
          Start Free Today
        </Button>
      </main>
      <aside className="xs:text-base mt-3 flex justify-center text-sm text-[var(--text-disabled)]">
        No credit card required · Free for up to 50 attendees
      </aside>
    </section>
  );
}

export default CTASection;
