import { MoreHorizontal } from "lucide-react";
import { customers } from "../../data/dashboardData";

export default function RecentCustomers() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      <div className="flex items-center justify-between border-b border-zinc-100 p-5 md:px-6">
        <div>
          <h3 className="font-semibold text-zinc-950">Recent customers</h3>
          <p className="mt-1 text-sm text-zinc-400">
            Latest customer activity
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg border border-zinc-200 px-3 py-2 text-xs font-medium transition hover:bg-zinc-50"
        >
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">
          <thead>
            <tr className="border-b border-zinc-100 text-xs uppercase tracking-wide text-zinc-400">
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Company</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Spent</th>
              <th className="px-6 py-4" />
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-zinc-100 last:border-0"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold">
                      {customer.name
                        .split(" ")
                        .map((item) => item[0])
                        .join("")}
                    </div>

                    <div>
                      <p className="text-sm font-medium text-zinc-900">
                        {customer.name}
                      </p>

                      <p className="text-xs text-zinc-400">{customer.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-sm text-zinc-500">
                  {customer.company}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      customer.status === "Active"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm font-medium">
                  {customer.spent}
                </td>

                <td className="px-6 py-4">
                  <button type="button">
                    <MoreHorizontal size={18} className="text-zinc-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}