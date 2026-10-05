import { Bell, Menu, Search } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-200 bg-white/90 px-4 backdrop-blur md:h-20 md:px-8">
      
      <div className="flex items-center gap-3">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 lg:hidden"
        >
          <Menu size={19} />
        </button>

        <div>
          <p className="hidden text-sm text-zinc-400 sm:block">
            Workspace
          </p>

          <h2 className="text-sm font-semibold text-zinc-900 sm:text-base">
            Dashboard
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        {/* Desktop search */}
        <div className="relative hidden md:block">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="text"
            placeholder="Search anything..."
            className="w-64 rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-zinc-400 focus:bg-white"
          />
        </div>

        {/* Mobile search */}
        <button
          type="button"
          aria-label="Search"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 md:hidden"
        >
          <Search size={18} />
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white transition hover:bg-zinc-50"
        >
          <Bell size={18} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs font-semibold text-white">
          ZY
        </div>
      </div>
    </header>
  );
}