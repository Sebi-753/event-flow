import { getEvents } from "@/lib/Data-services";

const BASE_URL = "https://your-project-name.vercel.app";

export default async function sitemap() {
  const events = await getEvents();

  const eventPages = events.map((event) => ({
    url: `${BASE_URL}/events/${event.id}`,
    lastModified: new Date(
      event.updated_at ?? event.created_at ?? event.created_at,
    ),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/events`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...eventPages,
  ];
}
