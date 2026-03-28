import { useState } from "react";
import { Search, Download, Eye, Send, FileText } from "lucide-react";

interface Invoice {
  id: string;
  customer: string;
  property: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue";
  issueDate: string;
  dueDate: string;
  items: number;
}

const mockInvoices: Invoice[] = [
  {
    id: "INV-2024-001",
    customer: "Emily Johnson",
    property: "Modern Luxe Villa",
    amount: 1650500,
    status: "Paid",
    issueDate: "2024-03-15",
    dueDate: "2024-03-30",
    items: 1,
  },
  {
    id: "INV-2024-002",
    customer: "Michael Chen",
    property: "Seaside Penthouse",
    amount: 2100000,
    status: "Pending",
    issueDate: "2024-03-18",
    dueDate: "2024-04-02",
    items: 1,
  },
  {
    id: "INV-2024-003",
    customer: "Sarah Williams",
    property: "Downtown Apartment",
    amount: 3500,
    status: "Paid",
    issueDate: "2024-03-10",
    dueDate: "2024-03-25",
    items: 2,
  },
  {
    id: "INV-2024-004",
    customer: "David Martinez",
    property: "Garden Estate",
    amount: 96000,
    status: "Overdue",
    issueDate: "2024-02-28",
    dueDate: "2024-03-15",
    items: 1,
  },
];

export default function Invoices() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Invoices</h1>
          <p className="text-slate-600">Manage and track invoices</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#07BE8A] to-emerald-600 text-white font-medium shadow-lg shadow-[#07BE8A]/30 hover:shadow-xl hover:shadow-[#07BE8A]/40 transition-all duration-300">
          <FileText className="w-5 h-5" />
          Create Invoice
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Total Invoiced</p>
            <div className="w-2 h-2 rounded-full bg-blue-500" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900">
            ${(mockInvoices.reduce((sum, inv) => sum + inv.amount, 0) / 1000000).toFixed(2)}M
          </h3>
        </div>
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Paid</p>
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900">
            ${(mockInvoices.filter(inv => inv.status === "Paid").reduce((sum, inv) => sum + inv.amount, 0) / 1000000).toFixed(2)}M
          </h3>
        </div>
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-slate-600">Overdue</p>
            <div className="w-2 h-2 rounded-full bg-red-500" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900">
            ${(mockInvoices.filter(inv => inv.status === "Overdue").reduce((sum, inv) => sum + inv.amount, 0) / 1000).toFixed(0)}K
          </h3>
        </div>
      </div>

      {/* Search and filter */}
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search invoices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900 placeholder:text-slate-400"
            />
          </div>
          <select className="px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900">
            <option>All Status</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
          </select>
        </div>
      </div>

      {/* Invoices table */}
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/40">
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Invoice ID</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Customer</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Property</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Amount</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Issue Date</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Due Date</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-white/20 hover:bg-white/40 transition-colors">
                  <td className="py-4 px-6">
                    <span className="font-mono text-sm text-slate-900 font-medium">{invoice.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-900">{invoice.customer}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-700">{invoice.property}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-semibold text-slate-900">
                      ${invoice.amount.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600">
                      {new Date(invoice.issueDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600">
                      {new Date(invoice.dueDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        invoice.status === "Paid"
                          ? "bg-emerald-100 text-emerald-700"
                          : invoice.status === "Pending"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-white/80 text-slate-700 transition-colors" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-white/80 text-slate-700 transition-colors" title="Download">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-white/80 text-slate-700 transition-colors" title="Send">
                        <Send className="w-4 h-4" />
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
