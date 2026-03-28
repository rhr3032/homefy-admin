import { Save, Bell, Lock, Globe, Palette, Database } from "lucide-react";

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Settings</h1>
          <p className="text-slate-600">Configure your dashboard preferences</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#07BE8A] to-emerald-600 text-white font-medium shadow-lg shadow-[#07BE8A]/30 hover:shadow-xl hover:shadow-[#07BE8A]/40 transition-all duration-300">
          <Save className="w-5 h-5" />
          Save All Changes
        </button>
      </div>

      {/* Settings sections */}
      <div className="space-y-6">
        {/* General Settings */}
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            General Settings
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Site Name</label>
                <input
                  type="text"
                  defaultValue="Homeify Real Estate"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Language</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Timezone</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50">
                  <option>UTC-08:00 (Pacific Time)</option>
                  <option>UTC-05:00 (Eastern Time)</option>
                  <option>UTC+00:00 (GMT)</option>
                  <option>UTC+01:00 (CET)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Currency</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50">
                  <option>USD - US Dollar</option>
                  <option>EUR - Euro</option>
                  <option>GBP - British Pound</option>
                  <option>JPY - Japanese Yen</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <Bell className="w-4 h-4 text-white" />
            </div>
            Notification Settings
          </h3>
          <div className="space-y-4">
            {[
              { label: "Email notifications for new properties", checked: true },
              { label: "Email notifications for new customers", checked: true },
              { label: "Email notifications for transactions", checked: true },
              { label: "Push notifications for messages", checked: false },
              { label: "Weekly analytics reports", checked: true },
              { label: "Monthly performance summary", checked: true },
            ].map((item, index) => (
              <label key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/60 hover:bg-white/80 cursor-pointer transition-colors">
                <span className="text-sm text-slate-700">{item.label}</span>
                <input
                  type="checkbox"
                  defaultChecked={item.checked}
                  className="w-5 h-5 rounded border-slate-300 text-[#07BE8A] focus:ring-[#07BE8A]/50"
                />
              </label>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
              <Lock className="w-4 h-4 text-white" />
            </div>
            Security Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Change Password</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="password"
                  placeholder="Current password"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                />
                <input
                  type="password"
                  placeholder="New password"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                />
              </div>
            </div>
            <label className="flex items-center justify-between p-4 rounded-xl bg-white/60 hover:bg-white/80 cursor-pointer transition-colors">
              <div>
                <p className="text-sm font-medium text-slate-900">Two-Factor Authentication</p>
                <p className="text-xs text-slate-600">Add an extra layer of security</p>
              </div>
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-300 text-[#07BE8A] focus:ring-[#07BE8A]/50"
              />
            </label>
            <label className="flex items-center justify-between p-4 rounded-xl bg-white/60 hover:bg-white/80 cursor-pointer transition-colors">
              <div>
                <p className="text-sm font-medium text-slate-900">Login Alerts</p>
                <p className="text-xs text-slate-600">Get notified of new login attempts</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="w-5 h-5 rounded border-slate-300 text-[#07BE8A] focus:ring-[#07BE8A]/50"
              />
            </label>
          </div>
        </div>

        {/* Appearance */}
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <Palette className="w-4 h-4 text-white" />
            </div>
            Appearance
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Theme</label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50">
                <option>Light</option>
                <option>Dark</option>
                <option>Auto</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Accent Color</label>
              <div className="flex gap-3">
                {["#07BE8A", "#3B82F6", "#8B5CF6", "#F59E0B", "#EF4444"].map((color) => (
                  <button
                    key={color}
                    className="w-12 h-12 rounded-xl border-2 border-white/40 hover:border-white/80 transition-colors shadow-lg"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Data & Privacy */}
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
              <Database className="w-4 h-4 text-white" />
            </div>
            Data & Privacy
          </h3>
          <div className="space-y-3">
            <button className="w-full px-6 py-3 rounded-xl bg-white/60 hover:bg-white/80 text-slate-700 font-medium transition-colors text-left">
              Export All Data
            </button>
            <button className="w-full px-6 py-3 rounded-xl bg-white/60 hover:bg-white/80 text-slate-700 font-medium transition-colors text-left">
              Clear Cache
            </button>
            <button className="w-full px-6 py-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-medium transition-colors text-left">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
