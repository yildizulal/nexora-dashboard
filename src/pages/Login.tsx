import { useState, type FormEvent } from "react";
import { Eye, EyeOff, Sparkles } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState("demo@nexora.com");
  const [password, setPassword] = useState("demo123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const success = login(email, password);

    if (success) {
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="grid min-h-screen bg-white lg:grid-cols-2">
      {/* Left */}
      <div className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8">
        <div className="w-full max-w-md">
          <div className="mb-10 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-white">
              <Sparkles size={19} />
            </div>

            <div>
              <h1 className="text-lg font-bold">Nexora</h1>
              <p className="text-xs text-zinc-400">
                Business Intelligence
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950">
              Welcome back
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              Sign in to access your workspace.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700">
                Email address
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-medium text-zinc-500 hover:text-zinc-950"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 pr-12 text-sm outline-none transition focus:border-zinc-500"
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-zinc-950 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Sign in
            </button>
          </form>

          <div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-xs font-semibold text-zinc-700">
              Demo credentials
            </p>

            <p className="mt-2 text-xs text-zinc-500">
              Email: demo@nexora.com
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              Password: demo123
            </p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="relative hidden overflow-hidden bg-zinc-950 lg:flex lg:items-center lg:justify-center">
        <div className="absolute left-16 top-16 h-52 w-52 rounded-full border border-white/10" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full border border-white/10" />

        <div className="relative max-w-lg px-12 text-white">
          <p className="mb-5 text-sm font-medium text-zinc-400">
            NEXORA WORKSPACE
          </p>

          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Everything you need to understand your business.
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-zinc-400">
            Track performance, manage projects and understand your customers
            from one workspace.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-bold">1.2K+</p>
              <p className="mt-1 text-xs text-zinc-500">Customers</p>
            </div>

            <div>
              <p className="text-2xl font-bold">42</p>
              <p className="mt-1 text-xs text-zinc-500">Projects</p>
            </div>

            <div>
              <p className="text-2xl font-bold">24.5K</p>
              <p className="mt-1 text-xs text-zinc-500">Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}