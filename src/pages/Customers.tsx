import { useMemo, useState } from "react";
import {
  Filter,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";

const customers = [
  {
    id: 1,
    name: "Olivia Martin",
    email: "olivia@example.com",
    company: "Vertex Labs",
    status: "Active",
    spent: 4250,
    joined: "Sep 12, 2026",
  },
  {
    id: 2,
    name: "Jackson Lee",
    email: "jackson@example.com",
    company: "Northstar",
    status: "Active",
    spent: 3820,
    joined: "Sep 08, 2026",
  },
  {
    id: 3,
    name: "Sophia Brown",
    email: "sophia@example.com",
    company: "Lumina Studio",
    status: "Pending",
    spent: 2940,
    joined: "Aug 28, 2026",
  },
  {
    id: 4,
    name: "Noah Williams",
    email: "noah@example.com",
    company: "Apex Digital",
    status: "Active",
    spent: 2610,
    joined: "Aug 20, 2026",
  },
  {
    id: 5,
    name: "Emma Davis",
    email: "emma@example.com",
    company: "Nova Commerce",
    status: "Inactive",
    spent: 1980,
    joined: "Jul 18, 2026",
  },
];

export default function Customers() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const query = search.toLowerCase();

      const matchesSearch =
        customer.name.toLowerCase().includes(query) ||
        customer.email.toLowerCase().includes(query) ||
        customer.company.toLowerCase().includes(query);

      const matchesStatus =
        status === "All" || customer.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="mx-auto max-w-[1600px]">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Customers
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Manage your customer relationships and activity.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white"
        >
          <Plus size={17} />
          Add customer
        </button>
      </div>

      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search customers..."
            className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-zinc-400"
          />
        </div>

        <div className="relative">
          <Filter
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full appearance-none rounded-xl border border-zinc-200 bg-white py-2.5 pl-9 pr-10 text-sm outline-none sm:w-40"
          >
            <option>All</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[780px] text-left">
            <thead>
              <tr className="border-b border-zinc-100 bg-zinc-50/50 text-xs uppercase tracking-wide text-zinc-400">
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Total spent</th>
                <th className="px-6 py-4 font-medium">Joined</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-xs font-semibold">
                        {customer.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>

                      <div>
                        <p className="text-sm font-medium">
                          {customer.name}
                        </p>

                        <p className="text-xs text-zinc-400">
                          {customer.email}
                        </p>
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
                          : customer.status === "Pending"
                            ? "bg-amber-50 text-amber-600"
                            : "bg-zinc-100 text-zinc-500"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm font-medium">
                    ${customer.spent.toLocaleString()}
                  </td>

                  <td className="px-6 py-4 text-sm text-zinc-400">
                    {customer.joined}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-100"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredCustomers.length === 0 && (
            <div className="p-12 text-center">
              <p className="font-medium">No customers found.</p>

              <p className="mt-1 text-sm text-zinc-400">
                Try changing your search or filter.
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm text-zinc-400">
        Showing {filteredCustomers.length} of {customers.length} customers
      </p>
    </div>
  );
}