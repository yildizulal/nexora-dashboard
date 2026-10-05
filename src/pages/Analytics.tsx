import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowUpRight, Eye, MousePointerClick, Users } from "lucide-react";

const trafficData = [
  { month: "Jan", visitors: 8200, conversions: 410 },
  { month: "Feb", visitors: 9400, conversions: 470 },
  { month: "Mar", visitors: 8800, conversions: 440 },
  { month: "Apr", visitors: 11200, conversions: 560 },
  { month: "May", visitors: 12600, conversions: 630 },
  { month: "Jun", visitors: 13900, conversions: 695 },
  { month: "Jul", visitors: 15200, conversions: 760 },
];

const sourceData = [
  { name: "Organic", value: 42 },
  { name: "Direct", value: 28 },
  { name: "Social", value: 18 },
  { name: "Referral", value: 12 },
];

const COLORS = ["#18181b", "#52525b", "#a1a1aa", "#e4e4e7"];

const countries = [
  { name: "United States", visitors: 4250 },
  { name: "United Kingdom", visitors: 2840 },
  { name: "Germany", visitors: 1920 },
  { name: "Italy", visitors: 1650 },
  { name: "Türkiye", visitors: 1540 },
];

const metrics = [
  {
    label: "Total Visitors",
    value: "15.2K",
    change: "+12.4%",
    icon: Users,
  },
  {
    label: "Page Views",
    value: "48.6K",
    change: "+8.7%",
    icon: Eye,
  },
  {
    label: "Conversions",
    value: "760",
    change: "+15.1%",
    icon: MousePointerClick,
  },
];

export default function Analytics() {
  return (
    <div className="mx-auto max-w-[1600px]">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-950 md:text-3xl">
          Analytics
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Track your business performance and audience growth.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map(({ label, value, change, icon: Icon }) => (
          <div
            key={label}
            className="rounded-2xl border border-zinc-200 bg-white p-5"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100">
                <Icon size={18} />
              </div>

              <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600">
                <ArrowUpRight size={13} />
                {change}
              </span>
            </div>

            <p className="mt-5 text-sm text-zinc-500">{label}</p>
            <h3 className="mt-1 text-2xl font-bold">{value}</h3>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-6">
          <div className="mb-6">
            <h3 className="font-semibold">Traffic overview</h3>
            <p className="mt-1 text-sm text-zinc-400">
              Website visitors over the last 7 months
            </p>
          </div>

          <div className="h-[240px] sm:h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="traffic" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="#18181b"
                      stopOpacity={0.2}
                    />
                    <stop
                      offset="95%"
                      stopColor="#18181b"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  vertical={false}
                  strokeDasharray="4 4"
                  stroke="#e4e4e7"
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis axisLine={false} tickLine={false} />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="visitors"
                  stroke="#18181b"
                  strokeWidth={2.5}
                  fill="url(#traffic)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-6">
          <h3 className="font-semibold">Traffic sources</h3>

          <p className="mt-1 text-sm text-zinc-400">
            Where your visitors come from
          </p>

          <div className="h-[210px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourceData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={3}
                >
                  {sourceData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {sourceData.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />

                  <span className="text-zinc-500">{item.name}</span>
                </div>

                <span className="font-semibold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 md:p-6">
        <div className="mb-6">
          <h3 className="font-semibold">Visitors by country</h3>
          <p className="mt-1 text-sm text-zinc-400">
            Top performing locations
          </p>
        </div>

        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={countries}>
              <CartesianGrid
                vertical={false}
                strokeDasharray="4 4"
                stroke="#e4e4e7"
              />

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
              />

              <YAxis axisLine={false} tickLine={false} />

              <Tooltip />

              <Bar
                dataKey="visitors"
                fill="#18181b"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}