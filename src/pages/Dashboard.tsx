import ProjectStatus from "../components/dashboard/ProjectStatus";
import RecentCustomers from "../components/dashboard/RecentCustomers";
import RevenueChart from "../components/dashboard/RevenueChart";
import StatCard from "../components/dashboard/StatCard";
import { stats } from "../data/dashboardData";

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-[1600px]">
      <div className="mb-8">
        <p className="text-sm font-medium text-zinc-400">
          Sunday, October 5
        </p>

        <h1 className="mt-1 text-xl font-bold tracking-tight text-zinc-950 sm:text-2xl md:text-3xl">
  Good morning, Zülal 👋
</h1>

        <p className="mt-2 text-sm text-zinc-500">
          Here's what's happening with your business today.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <RevenueChart />
        <ProjectStatus />
      </div>

      <div className="mt-6">
        <RecentCustomers />
      </div>
    </div>
  );
}