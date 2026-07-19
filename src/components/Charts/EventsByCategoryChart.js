"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#6366F1", // Technology
  "#10B981", // Business
  "#F59E0B", // Design
  "#EC4899", // Arts
  "#EF4444", // Health
  "#06B6D4", // Sports
];

const categories = [
  "Technology",
  "Business",
  "Design",
  "Arts",
  "Health",
  "Sports",
];

function EventsByCategoryChart({ events }) {
  // Initialize every category with 0
  const counts = {};

  categories.forEach((category) => {
    counts[category] = 0;
  });

  // Count events
  events?.forEach((event) => {
    counts[event.type]++;
  });

  // Convert to array for Recharts
  const chartData = categories.map((category) => ({
    category,
    value: counts[category],
  }));

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-1 text-xl font-semibold">Events by Category</h2>

      <p className="mb-6 text-sm text-gray-500">Distribution of your events</p>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="category"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
              cornerRadius={4}
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={entry.category} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default EventsByCategoryChart;

// "use client";

// import {
//   Cell,
//   Label,
//   Pie,
//   PieChart,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";

// const COLORS = [
//   "#6366F1", // Technology
//   "#10B981", // Business
//   "#F59E0B", // Design
//   "#EC4899", // Arts
//   "#EF4444", // Health
//   "#06B6D4", // Sports
// ];

// const CATEGORIES = [
//   "Technology",
//   "Business",
//   "Design",
//   "Arts",
//   "Health",
//   "Sports",
// ];

// function EventsByCategoryChart({ events }) {
//   // Count events per category
//   const counts = {};

//   CATEGORIES.forEach((category) => {
//     counts[category] = 0;
//   });

//   events.forEach((event) => {
//     if (counts[event.type] !== undefined) {
//       counts[event.type]++;
//     }
//   });

//   const chartData = CATEGORIES.map((category) => ({
//     category,
//     value: counts[category],
//   }));

//   const totalEvents = chartData.reduce((sum, item) => sum + item.value, 0);

//   return (
//     <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
//       {/* Header */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold text-gray-900">
//           Event Categories
//         </h2>

//         <p className="mt-1 text-sm text-gray-500">
//           Distribution of your events by category
//         </p>
//       </div>

//       <div className="grid items-center gap-8 lg:grid-cols-[1fr_220px]">
//         {/* Chart */}
//         <div className="h-80">
//           <ResponsiveContainer width="100%" height="100%">
//             <PieChart>
//               <Pie
//                 data={chartData}
//                 dataKey="value"
//                 nameKey="category"
//                 innerRadius={75}
//                 outerRadius={105}
//                 paddingAngle={3}
//                 cornerRadius={8}
//               >
//                 {chartData.map((entry, index) => (
//                   <Cell key={entry.category} fill={COLORS[index]} />
//                 ))}

//                 <Label
//                   position="center"
//                   content={({ viewBox }) => {
//                     const { cx, cy } = viewBox;

//                     return (
//                       <g>
//                         <text
//                           x={cx}
//                           y={cy - 8}
//                           textAnchor="middle"
//                           className="fill-gray-900 text-3xl font-bold"
//                         >
//                           {totalEvents}
//                         </text>

//                         <text
//                           x={cx}
//                           y={cy + 18}
//                           textAnchor="middle"
//                           className="fill-gray-500 text-sm"
//                         >
//                           Events
//                         </text>
//                       </g>
//                     );
//                   }}
//                 />
//               </Pie>

//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Custom Legend */}
//         <div className="space-y-4">
//           {chartData.map((item, index) => (
//             <div
//               key={item.category}
//               className="flex items-center justify-between rounded-xl border border-gray-100 px-3 py-2"
//             >
//               <div className="flex items-center gap-3">
//                 <div
//                   className="h-3 w-3 rounded-full"
//                   style={{
//                     backgroundColor: COLORS[index],
//                   }}
//                 />

//                 <span className="text-sm font-medium text-gray-700">
//                   {item.category}
//                 </span>
//               </div>

//               <div className="text-right">
//                 <p className="font-semibold text-gray-900">{item.value}</p>

//                 <p className="text-xs text-gray-500">
//                   {totalEvents === 0
//                     ? "0%"
//                     : `${Math.round((item.value / totalEvents) * 100)}%`}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EventsByCategoryChart;
