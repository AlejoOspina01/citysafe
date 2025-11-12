"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Download } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Admin Sidebar Component
 * Navigation sidebar for admin dashboard
 * Provides links to dashboard sections
 */
export function AdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Panel de Control",
      href: "/admin",
      icon: Home,
    },
    {
      label: "Reportes de Incidentes",
      href: "/admin/reports",
      icon: FileText,
    },
    {
      label: "Descargar Reportes",
      href: "/admin/download",
      icon: Download,
    },
  ];

  return (
    <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:flex md:flex-col md:w-64 bg-gray-900 text-white mt-15">
      <div className="flex items-center gap-2 p-6 border-b border-gray-800">
        <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center font-bold">
          CS
        </div>
        <span className="font-bold text-lg">Panel Administrativo CitySafe</span>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href} className="relative">
              <motion.div
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-gray-800 p-4">
        <button className="w-full px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm font-medium transition-colors">
          Logout
        </button>
      </div>
    </aside>
  );
}
