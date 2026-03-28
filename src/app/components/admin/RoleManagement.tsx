import { useState } from "react";
import { Plus, Search, Edit, Trash2, Shield, Users as UsersIcon } from "lucide-react";

interface Role {
  id: number;
  name: string;
  description: string;
  users: number;
  permissions: string[];
  color: string;
}

const mockRoles: Role[] = [
  {
    id: 1,
    name: "Super Admin",
    description: "Full system access with all permissions",
    users: 2,
    permissions: ["All Permissions"],
    color: "from-red-500 to-red-600",
  },
  {
    id: 2,
    name: "Admin",
    description: "Manage properties, users, and content",
    users: 5,
    permissions: ["Manage Properties", "Manage Users", "Manage Content", "View Reports"],
    color: "from-[#07BE8A] to-emerald-600",
  },
  {
    id: 3,
    name: "Agent",
    description: "Manage properties and customers",
    users: 12,
    permissions: ["Manage Properties", "View Customers", "Create Transactions"],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 4,
    name: "Content Manager",
    description: "Manage blog, FAQs, and testimonials",
    users: 3,
    permissions: ["Manage Blog", "Manage FAQs", "Manage Testimonials"],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 5,
    name: "Viewer",
    description: "Read-only access to dashboard and reports",
    users: 8,
    permissions: ["View Dashboard", "View Reports"],
    color: "from-slate-500 to-slate-600",
  },
];

const allPermissions = [
  "Manage Properties",
  "Manage Users",
  "Manage Content",
  "View Reports",
  "View Dashboard",
  "Manage Blog",
  "Manage FAQs",
  "Manage Testimonials",
  "View Customers",
  "Create Transactions",
  "Manage Settings",
  "Manage Roles",
];

export default function RoleManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const togglePermission = (permission: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Role Management</h1>
          <p className="text-slate-600">Manage user roles and permissions</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#07BE8A] to-emerald-600 text-white font-medium shadow-lg shadow-[#07BE8A]/30 hover:shadow-xl hover:shadow-[#07BE8A]/40 transition-all duration-300"
        >
          <Plus className="w-5 h-5" />
          Add Role
        </button>
      </div>

      {/* Search */}
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search roles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Roles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRoles.map((role) => (
          <div
            key={role.id}
            className="group rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-1 truncate group-hover:text-[#07BE8A] transition-colors">
                  {role.name}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2 mb-3">{role.description}</p>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <UsersIcon className="w-4 h-4" />
                  <span>{role.users} users</span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs font-medium text-slate-700 mb-2">Permissions:</p>
              <div className="flex flex-wrap gap-1">
                {role.permissions.slice(0, 3).map((permission, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-md bg-slate-100 text-slate-700 text-xs"
                  >
                    {permission}
                  </span>
                ))}
                {role.permissions.length > 3 && (
                  <span className="px-2 py-1 rounded-md bg-slate-100 text-slate-700 text-xs">
                    +{role.permissions.length - 3} more
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 pt-4 border-t border-white/40">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 text-slate-700 transition-colors">
                <Edit className="w-4 h-4" />
                Edit
              </button>
              <button className="p-2 rounded-lg bg-white/60 hover:bg-red-50 text-red-600 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Role Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Add New Role</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Role Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                  placeholder="e.g., Property Manager"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                  placeholder="Brief description of this role..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Permissions</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto p-4 rounded-xl bg-white/60 border border-white/40">
                  {allPermissions.map((permission) => (
                    <label
                      key={permission}
                      className="flex items-center gap-3 cursor-pointer hover:bg-white/60 p-2 rounded-lg transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedPermissions.includes(permission)}
                        onChange={() => togglePermission(permission)}
                        className="w-4 h-4 rounded border-slate-300 text-[#07BE8A] focus:ring-[#07BE8A]/50"
                      />
                      <span className="text-sm text-slate-700">{permission}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setSelectedPermissions([]);
                  }}
                  className="flex-1 px-6 py-3 rounded-xl bg-white/60 hover:bg-white/80 text-slate-700 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-[#07BE8A] to-emerald-600 text-white font-medium shadow-lg shadow-[#07BE8A]/30 hover:shadow-xl hover:shadow-[#07BE8A]/40 transition-all duration-300"
                >
                  Create Role
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
