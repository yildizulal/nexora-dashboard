import { Bell, Moon, Shield, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Settings
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          Manage your workspace preferences.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        <div className="border-b border-zinc-100 p-5 md:p-6">
          <h2 className="font-semibold">Preferences</h2>
          <p className="mt-1 text-sm text-zinc-400">
            Customize your Nexora experience.
          </p>
        </div>

        <div className="divide-y divide-zinc-100">
          <div className="flex items-center justify-between gap-5 p-5 md:p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100">
                {theme === "dark" ? (
                  <Moon size={18} />
                ) : (
                  <Sun size={18} />
                )}
              </div>

              <div>
                <p className="text-sm font-semibold">Appearance</p>
                <p className="mt-1 text-xs text-zinc-400">
                  Switch between light and dark mode.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-xl bg-zinc-950 px-4 py-2 text-xs font-semibold text-white"
            >
              {theme === "light" ? "Dark mode" : "Light mode"}
            </button>
          </div>

          <div className="flex items-center gap-4 p-5 md:p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100">
              <Bell size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold">Notifications</p>
              <p className="mt-1 text-xs text-zinc-400">
                Email and workspace notifications enabled.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 md:p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100">
              <Shield size={18} />
            </div>

            <div>
              <p className="text-sm font-semibold">Security</p>
              <p className="mt-1 text-xs text-zinc-400">
                Demo authentication is currently enabled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}