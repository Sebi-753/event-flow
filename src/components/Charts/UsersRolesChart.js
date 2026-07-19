"use client";

import {
  Cell,
  Label,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = [
  "#6366F1", // Attendee
  "#10B981", // Organizer
  "#EF4444", // Admin
];

function UsersRolesChart({ users }) {
  const roles = {
    attendee: 0,
    organizer: 0,
    admin: 0,
  };

  users.forEach((user) => {
    if (roles[user.role] !== undefined) {
      roles[user.role]++;
    }
  });

  const chartData = [
    { role: "Attendees", value: roles.attendee },
    { role: "Organizers", value: roles.organizer },
    { role: "Admins", value: roles.admin },
  ];

  const totalUsers = users.length;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Users by Role</h2>

        <p className="mt-1 text-xs text-gray-500">
          Distribution of registered users
        </p>
      </div>

      {/* Chart */}
      <div className="mx-auto h-44 max-w-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="role"
              innerRadius={45}
              outerRadius={65}
              paddingAngle={5}
              cornerRadius={8}
              stroke="white"
              strokeWidth={5}
            >
              {chartData.map((entry, index) => (
                <Cell key={entry.role} fill={COLORS[index]} />
              ))}

              <Label
                position="center"
                content={({ viewBox }) => {
                  if (!viewBox?.cx || !viewBox?.cy) return null;

                  return (
                    <g>
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy - 4}
                        textAnchor="middle"
                        className="fill-gray-900 text-lg font-bold"
                      >
                        {totalUsers}
                      </text>

                      <text
                        x={viewBox.cx}
                        y={viewBox.cy + 12}
                        textAnchor="middle"
                        className="fill-gray-500 text-[10px]"
                      >
                        Users
                      </text>
                    </g>
                  );
                }}
              />
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-3 space-y-1.5">
        {chartData.map((item, index) => (
          <div
            key={item.role}
            className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-1.5"
          >
            <div className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              <span className="text-xs font-medium text-gray-700">
                {item.role}
              </span>
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold text-gray-900">
                {item.value}
              </p>

              <p className="text-[10px] text-gray-500">
                {totalUsers === 0
                  ? "0%"
                  : `${Math.round((item.value / totalUsers) * 100)}%`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersRolesChart;
