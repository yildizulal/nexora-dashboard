import {
  LayoutDashboard,
  ChartNoAxesCombined,
  FolderKanban,
  Users,
  Settings,
  LogOut,
  Sparkles,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface SidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
}

const menuItems = [
  {
    name: "Overview",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: FolderKanban,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: Users,
  },
];

export default function Sidebar({
  mobileOpen = false,
  onClose,
}: SidebarProps) {

    const { logout } = useAuth();

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-64 flex-col
          border-r border-zinc-200 bg-white p-5
          transition-transform duration-300

          lg:translate-x-0

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo */}
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-white">
              <Sparkles size={19} />
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-tight">Nexora</h1>
              <p className="text-xs text-zinc-400">Workspace</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-zinc-100 lg:hidden"
          >
            <X size={19} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-1">
          <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Workspace
          </p>

          {menuItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-zinc-950 text-white"
                    : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950"
                }`
              }
            >
              <Icon size={18} />
              {name}
            </NavLink>
          ))}

          <p className="mb-2 mt-8 px-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
            Account
          </p>

          <NavLink
            to="/settings"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-zinc-950 text-white"
                  : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950"
              }`
            }
          >
            <Settings size={18} />
            Settings
          </NavLink>
        </nav>

        <div className="border-t border-zinc-100 pt-5">
          <div className="flex items-center gap-3 rounded-xl p-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-200 text-sm font-semibold">
              ZY
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">
                Zülal Yıldız
              </p>
              <p className="truncate text-xs text-zinc-400">
                Administrator
              </p>
            </div>

            <button
  type="button"
  onClick={logout}
  aria-label="Sign out"
  title="Sign out"
  className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-950"
>
  <LogOut size={17} />
</button>
          </div>
        </div>
      </aside>
    </>
  );
}