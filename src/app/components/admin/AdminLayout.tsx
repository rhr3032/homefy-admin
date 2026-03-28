import { Outlet, NavLink } from "react-router";
import { 
  LayoutDashboard, 
  Building2, 
  FolderTree, 
  MessageSquareQuote, 
  FileText, 
  HelpCircle, 
  Users, 
  CreditCard, 
  FileSpreadsheet, 
  Mail, 
  UserCog, 
  Settings as SettingsIcon,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import logo from "../../../imports/dark-logo.svg";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Properties", href: "/properties", icon: Building2 },
  { name: "Categories", href: "/categories", icon: FolderTree },
  { name: "Testimonials", href: "/testimonials", icon: MessageSquareQuote },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "FAQs", href: "/faqs", icon: HelpCircle },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Transactions", href: "/transactions", icon: CreditCard },
  { name: "Invoices", href: "/invoices", icon: FileSpreadsheet },
  { name: "Contact Info", href: "/contact-info", icon: Mail },
  { name: "Role Management", href: "/roles", icon: UserCog },
  { name: "Settings", href: "/settings", icon: SettingsIcon },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Glass effect container */}
        <div className="h-full bg-white/40 backdrop-blur-xl border-r border-white/20 shadow-xl">
          <div className="flex flex-col h-full">
            {/* Logo section */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/20">
              <img src={logo} alt="Logo" className="h-8" />
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? "bg-[#07BE8A] text-white shadow-lg shadow-[#07BE8A]/30"
                        : "text-slate-700 hover:bg-white/60 hover:shadow-md"
                    }`
                  }
                  onClick={() => setSidebarOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      <item.icon
                        className={`w-5 h-5 ${
                          isActive ? "text-white" : "text-slate-600 group-hover:text-[#07BE8A]"
                        }`}
                      />
                      <span className="font-medium">{item.name}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* User section */}
            <div className="p-4 border-t border-white/20">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/60 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#07BE8A] to-emerald-600 flex items-center justify-center text-white">
                  AD
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">Admin User</p>
                  <p className="text-xs text-slate-600">admin@homeify.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-white/40 backdrop-blur-xl border-b border-white/20 shadow-sm">
          <div className="px-6 py-4 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/60 transition-colors"
            >
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
            <div className="flex items-center gap-4 ml-auto">
              <div className="hidden sm:block text-right">
                <p className="text-sm text-slate-600">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
