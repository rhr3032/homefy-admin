import { useState } from "react";
import { Search, Edit, Trash2, Mail, Phone, MapPin, MoreVertical } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  type: "Buyer" | "Seller" | "Investor";
  status: "Active" | "Inactive";
  joined: string;
  properties: number;
  image: string;
}

const mockCustomers: Customer[] = [
  {
    id: 1,
    name: "Emily Johnson",
    email: "emily.j@email.com",
    phone: "+1 (555) 123-4567",
    location: "Los Angeles, CA",
    type: "Buyer",
    status: "Active",
    joined: "2024-01-15",
    properties: 3,
    image: "professional woman smiling",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@email.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA",
    type: "Investor",
    status: "Active",
    joined: "2023-11-20",
    properties: 8,
    image: "asian businessman",
  },
  {
    id: 3,
    name: "Sarah Williams",
    email: "sarah.w@email.com",
    phone: "+1 (555) 345-6789",
    location: "Miami, FL",
    type: "Seller",
    status: "Active",
    joined: "2024-02-10",
    properties: 2,
    image: "blonde woman professional",
  },
  {
    id: 4,
    name: "David Martinez",
    email: "d.martinez@email.com",
    phone: "+1 (555) 456-7890",
    location: "New York, NY",
    type: "Buyer",
    status: "Inactive",
    joined: "2023-09-05",
    properties: 1,
    image: "man suit professional",
  },
];

export default function Customers() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Customers</h1>
          <p className="text-slate-600">Manage your customer database</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-3 rounded-xl bg-white/60 backdrop-blur-xl border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900 shadow-lg">
            <option>Export Data</option>
            <option>Export CSV</option>
            <option>Export PDF</option>
          </select>
        </div>
      </div>

      {/* Search and filter */}
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900 placeholder:text-slate-400"
            />
          </div>
          <select className="px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900">
            <option>All Types</option>
            <option>Buyer</option>
            <option>Seller</option>
            <option>Investor</option>
          </select>
          <select className="px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Customers table */}
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/40">
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Customer</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Contact</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Type</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Properties</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Joined</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockCustomers.map((customer) => (
                <tr key={customer.id} className="border-b border-white/20 hover:bg-white/40 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                        <ImageWithFallback
                          src={`https://source.unsplash.com/200x200/?${encodeURIComponent(customer.image)}`}
                          alt={customer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{customer.name}</p>
                        <div className="flex items-center gap-1 text-xs text-slate-600">
                          <MapPin className="w-3 h-3" />
                          {customer.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Mail className="w-4 h-4" />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Phone className="w-4 h-4" />
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        customer.type === "Buyer"
                          ? "bg-blue-100 text-blue-700"
                          : customer.type === "Seller"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {customer.type}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-900">{customer.properties}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        customer.status === "Active"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600">
                      {new Date(customer.joined).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-white/80 text-slate-700 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-white/80 text-slate-700 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
