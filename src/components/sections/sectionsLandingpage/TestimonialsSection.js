import Link from "next/link";
import EmptyState from "@/components/ui/EmptyState";
import Testimonial from "@/components/ui/Testimonial";
import { getFirstReviews } from "@/lib/Data-services";

async function TestimonialsSection() {
  const testimonials = await getFirstReviews();

  return (
    <section className="bg-[var(--bg-secondary)] px-[3rem] py-20 md:px-[4rem] lg:px-30">
      <h2 className="text-center text-3xl font-bold">What our customers say</h2>
      <main className="pt-16">
        {testimonials.length !== 0 ? (
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Testimonial review={testimonial} key={testimonial.id} />
            ))}
          </ul>
        ) : (
          <EmptyState
            title="No testimonials"
            description="Tere are no comments about any event yet."
          />
        )}
      </main>
    </section>
  );
}

export default TestimonialsSection;
