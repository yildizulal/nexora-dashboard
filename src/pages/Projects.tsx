import { useMemo, useState } from "react";
import {
  CalendarDays,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    client: "Vertex Labs",
    status: "In Progress",
    progress: 82,
    deadline: "Oct 18, 2026",
    members: ["OM", "JL", "SB"],
  },
  {
    id: 2,
    name: "Mobile Application",
    client: "Northstar",
    status: "In Progress",
    progress: 64,
    deadline: "Nov 02, 2026",
    members: ["NW", "OM"],
  },
  {
    id: 3,
    name: "Marketing Platform",
    client: "Lumina Studio",
    status: "Planning",
    progress: 25,
    deadline: "Nov 20, 2026",
    members: ["SB", "JL"],
  },
  {
    id: 4,
    name: "Analytics Dashboard",
    client: "Apex Digital",
    status: "Completed",
    progress: 100,
    deadline: "Sep 28, 2026",
    members: ["OM", "NW", "JL"],
  },
  {
    id: 5,
    name: "E-commerce Platform",
    client: "Nova Commerce",
    status: "In Progress",
    progress: 48,
    deadline: "Dec 04, 2026",
    members: ["JL", "SB"],
  },
  {
    id: 6,
    name: "Brand Website",
    client: "Monarch",
    status: "Completed",
    progress: 100,
    deadline: "Sep 12, 2026",
    members: ["NW", "OM"],
  },
];

const filters = ["All", "In Progress", "Planning", "Completed"];

export default function Projects() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.client.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || project.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className="mx-auto max-w-[1600px]">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Projects
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Manage and track your active projects.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white"
        >
          <Plus size={17} />
          New project
        </button>
      </div>

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-zinc-400"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-medium transition ${
                filter === item
                  ? "bg-zinc-950 text-white"
                  : "border border-zinc-200 bg-white text-zinc-500 hover:bg-zinc-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-zinc-200 bg-white p-12 text-center">
          <p className="font-medium">No projects found.</p>
          <p className="mt-1 text-sm text-zinc-400">
            Try changing your search or filter.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      project.status === "Completed"
                        ? "bg-emerald-50 text-emerald-600"
                        : project.status === "Planning"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {project.status}
                  </span>

                  <h3 className="mt-4 text-lg font-semibold">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    {project.client}
                  </p>
                </div>

                <button
                  type="button"
                  className="rounded-lg p-2 text-zinc-400 hover:bg-zinc-100"
                >
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="mt-7">
                <div className="mb-2 flex justify-between text-xs">
                  <span className="text-zinc-400">Progress</span>
                  <span className="font-medium">
                    {project.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className="h-full rounded-full bg-zinc-950"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                <div className="flex -space-x-2">
                  {project.members.map((member) => (
                    <div
                      key={member}
                      className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-zinc-200 text-[10px] font-semibold"
                    >
                      {member}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <CalendarDays size={14} />
                  {project.deadline}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}