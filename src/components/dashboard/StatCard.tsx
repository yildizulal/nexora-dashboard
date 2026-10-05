import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: string;
}

export default function StatCard({
  title,
  value,
  change,
  trend,
}: StatCardProps) {
  const positive = trend === "up";

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-500">{title}</p>

        <div
          className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
            positive
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {positive ? (
            <ArrowUpRight size={13} />
          ) : (
            <ArrowDownRight size={13} />
          )}

          {change}
        </div>
      </div>

      <h3 className="text-2xl font-bold tracking-tight text-zinc-950">
        {value}
      </h3>

      <p className="mt-1 text-xs text-zinc-400">Compared to last month</p>
    </div>
  );
}