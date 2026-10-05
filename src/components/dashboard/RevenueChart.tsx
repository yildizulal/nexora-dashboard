import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { revenueData } from "../../data/dashboardData";

export default function RevenueChart() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-semibold text-zinc-950">Revenue overview</h3>
          <p className="mt-1 text-sm text-zinc-400">
            Monthly revenue performance
          </p>
        </div>

        <select className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs outline-none sm:w-auto">
          <option>Last 7 months</option>
          <option>This year</option>
        </select>
      </div>

      <div className="h-[220px] w-full sm:h-[260px] md:h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#18181b"
                  stopOpacity={0.18}
                />
                <stop
                  offset="95%"
                  stopColor="#18181b"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="#e4e4e7"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#a1a1aa", fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#a1a1aa", fontSize: 12 }}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#18181b"
              strokeWidth={2.5}
              fill="url(#revenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}