import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function DashboardLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Sidebar
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <div className="lg:ml-64">
        <Header
          onMenuClick={() => setMobileMenuOpen(true)}
        />

        <main className="p-4 sm:p-5 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}