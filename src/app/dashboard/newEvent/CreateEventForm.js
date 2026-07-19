"use client";

import { useState } from "react";
import { toast } from "sonner";
import { createEventAction } from "@/lib/actions";

export default function CreateEventForm() {
  const [fileName, setFileName] = useState("");

  async function onSubmit(formData) {
    const result = await createEventAction(formData);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }

  return (
    <form
      action={onSubmit}
      className="xs:mx-10 mx-6 my-8 max-w-5xl space-y-8 rounded-2xl bg-white p-8 shadow-sm"
    >
      {/* Header */}
      <header className="md:test-start text-center">
        <h1 className="xs:text-3xl text-2xl font-bold text-gray-900">
          Create New Event
        </h1>
        <p className="xs:text-base mt-2 text-sm text-gray-500">
          Fill in the information below to publish your event.
        </p>
      </header>

      {/* Event Details */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Event Details
        </h2>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Event Title
            </label>

            <input
              name="title"
              type="text"
              placeholder="SaaS Summit 2026"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 transition outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              rows={6}
              name="description"
              placeholder="Describe your event..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 transition outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category
            </label>

            <select
              name="type"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 transition outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            >
              <option>Technology</option>
              <option>Business</option>
              <option>Design</option>
              <option>Arts</option>
              <option>Health</option>
              <option>Sports</option>
            </select>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">Schedule</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Date
            </label>

            <input
              type="date"
              name="date"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 transition outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Time
            </label>

            <input
              type="time"
              name="time"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 transition outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">Location</h2>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Street Address
            </label>

            <input
              type="text"
              name="street"
              placeholder="747 Howard Street"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 transition outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                City
              </label>

              <input
                type="text"
                name="city"
                placeholder="San Francisco"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 transition outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Country
              </label>

              <input
                name="country"
                type="text"
                placeholder="United States"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 transition outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capacity */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">Capacity</h2>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Maximum Attendees
          </label>

          <input
            name="capacity"
            type="number"
            placeholder="100"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 transition outline-none placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
          />
        </div>
      </section>

      {/* Cover Image */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold text-gray-900">
          Cover Image
        </h2>

        <label className="flex h-56 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 text-gray-500 transition hover:border-indigo-400 hover:bg-indigo-50/30">
          <span className="xs:text-lg text-center text-sm font-medium">
            Upload Event Cover
          </span>

          <span className="xs:text-sm mt-2 text-center text-xs text-gray-400">
            {fileName ? `Selected: ${fileName}` : "PNG, JPG or WEBP • Max 5MB"}
          </span>

          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setFileName(file.name);
            }}
            name="image_url"
            className="hidden"
          />
        </label>
      </section>

      {/* Actions */}
      <div className="xs:flex-row xs:justify-end flex flex-col gap-4 border-t border-gray-200 pt-8">
        <button
          type="button"
          className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Publish Event
        </button>
      </div>
    </form>
  );
}
