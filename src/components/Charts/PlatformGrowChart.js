"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function PlatformGrowChart({ registrations, events }) {
  const dataMap = {};

  // Initialize last 30 days
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const key = date.toISOString().split("T")[0];

    dataMap[key] = {
      date: key,
      registrations: 0,
      events: 0,
    };
  }

  // Count registrations
  registrations.forEach((registration) => {
    if (!registration.registered_at) return;

    const key = registration.registered_at.split("T")[0];

    if (dataMap[key]) {
      dataMap[key].registrations++;
    }
  });

  // Count created events
  events.forEach((event) => {
    if (!event.created_at) return;

    const key = event.created_at.split("T")[0];

    if (dataMap[key]) {
      dataMap[key].events++;
    }
  });

  const chartData = Object.values(dataMap).map((item) => ({
    ...item,
    date: new Date(item.date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
  }));

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Platform Growth</h2>

        <p className="text-sm text-gray-500">
          Registrations and created events over the last 30 days
        </p>
      </div>

      <div className="h-50 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid stroke="#F3F4F6" strokeDasharray="3 3" />

            <XAxis dataKey="date" tick={{ fontSize: 12 }} tickMargin={10} />

            <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="registrations"
              name="Registrations"
              stroke="#4F46E5"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />

            <Line
              type="monotone"
              dataKey="events"
              name="Events Created"
              stroke="#10B981"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PlatformGrowChart;
