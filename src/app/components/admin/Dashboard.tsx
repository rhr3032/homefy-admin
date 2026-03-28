import { 
  Building2, 
  Users, 
  CreditCard, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const stats = [
  {
    name: "Total Properties",
    value: "248",
    change: "+12.5%",
    trend: "up",
    icon: Building2,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Active Customers",
    value: "1,842",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Total Revenue",
    value: "$2.4M",
    change: "+15.3%",
    trend: "up",
    icon: CreditCard,
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Growth Rate",
    value: "23.8%",
    change: "-2.1%",
    trend: "down",
    icon: TrendingUp,
    color: "from-orange-500 to-orange-600",
  },
];

const revenueData = [
  { month: "Jan", revenue: 185000, properties: 42 },
  { month: "Feb", revenue: 210000, properties: 48 },
  { month: "Mar", revenue: 195000, properties: 45 },
  { month: "Apr", revenue: 240000, properties: 52 },
  { month: "May", revenue: 260000, properties: 58 },
  { month: "Jun", revenue: 285000, properties: 61 },
];

const propertyTypeData = [
  { name: "Luxury Villa", value: 45, color: "#07BE8A" },
  { name: "Modern Apartment", value: 38, color: "#3B82F6" },
  { name: "Beach House", value: 28, color: "#8B5CF6" },
  { name: "Penthouse", value: 22, color: "#F59E0B" },
  { name: "Others", value: 15, color: "#EF4444" },
];

const recentActivities = [
  { id: 1, action: "New property added", property: "Modern Luxe Villa", time: "2 minutes ago", type: "success" },
  { id: 2, action: "Customer registered", property: "John Doe", time: "15 minutes ago", type: "info" },
  { id: 3, action: "Transaction completed", property: "$450,000", time: "1 hour ago", type: "success" },
  { id: 4, action: "Property updated", property: "Beach House #123", time: "2 hours ago", type: "warning" },
  { id: 5, action: "New inquiry received", property: "Penthouse Suite", time: "3 hours ago", type: "info" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-semibold text-slate-900 mb-2">Dashboard Overview</h1>
        <p className="text-slate-600">Welcome back! Here's what's happening with your real estate business.</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div
                className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
                  stat.trend === "up"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-slate-600">{stat.name}</p>
          </div>
        ))}
      </div>

      {/* Charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue chart */}
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Revenue & Properties</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#07BE8A"
                strokeWidth={3}
                dot={{ fill: "#07BE8A", r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="properties"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ fill: "#3B82F6", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Property types distribution */}
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">Property Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={propertyTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {propertyTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent activities */}
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Recent Activities</h3>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/60 hover:bg-white/80 transition-colors border border-white/20"
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  activity.type === "success"
                    ? "bg-emerald-500"
                    : activity.type === "warning"
                    ? "bg-orange-500"
                    : "bg-blue-500"
                }`}
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                <p className="text-sm text-slate-600">{activity.property}</p>
              </div>
              <p className="text-xs text-slate-500">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
