"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function RegistrationsChart({ registrations }) {
  // Count registrations by day of week
  const registrationsPerDay = {};

  registrations.forEach((registration) => {
    if (!registration.registered_at) return;

    const day = new Date(registration.registered_at).toLocaleDateString(
      "en-US",
      { weekday: "short" },
    );

    registrationsPerDay[day] = (registrationsPerDay[day] || 0) + 1;
  });

  // Keep days in order
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const chartData = days.map((day) => ({
    day,
    registrations: registrationsPerDay[day] || 0,
  }));

  return (
    <div className="xs:px-6 rounded-2xl border border-gray-200 bg-white px-4 py-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Registrations This Week
        </h2>

        <p className="text-sm text-gray-500">Number of registrations by day</p>
      </div>

      <div className="2xs:h-70 h-55 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="registrations"
              stroke="#4F46E5"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RegistrationsChart;
