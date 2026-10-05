const projects = [
  {
    name: "Website redesign",
    progress: 82,
  },
  {
    name: "Mobile application",
    progress: 64,
  },
  {
    name: "Marketing platform",
    progress: 47,
  },
  {
    name: "Analytics dashboard",
    progress: 91,
  },
];

export default function ProjectStatus() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-6">
      <div className="mb-6">
        <h3 className="font-semibold text-zinc-950">Project status</h3>
        <p className="mt-1 text-sm text-zinc-400">Current project progress</p>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.name}>
            <div className="mb-2 flex justify-between text-sm">
              <span className="font-medium text-zinc-700">{project.name}</span>

              <span className="text-zinc-400">{project.progress}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-zinc-100">
              <div
                className="h-full rounded-full bg-zinc-900"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}