import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";

import Providers from "@/components/ui/Providers";
import { Inter, Roboto_Mono } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: {
    default: "EventFlow | Discover, Create & Manage Events",
    template: "%s | EventFlow",
  },
  description:
    "EventFlow is a modern event management platform where attendees discover events, organizers create unforgettable experiences, and administrators keep everything running smoothly.",

  keywords: ["events", "event management", "meetup", "tickets"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="flex min-h-full flex-col">
        <Providers>
          {children}
          <Toaster position="top-right" richColors closeButton expand />
        </Providers>
      </body>
    </html>
  );
}
