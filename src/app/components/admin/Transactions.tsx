import { useState } from "react";
import { Search, Download, Filter, TrendingUp, CheckCircle, Clock, XCircle } from "lucide-react";

interface Transaction {
  id: string;
  property: string;
  customer: string;
  amount: number;
  type: "Purchase" | "Rental" | "Commission";
  status: "Completed" | "Pending" | "Failed";
  date: string;
  paymentMethod: string;
}

const mockTransactions: Transaction[] = [
  {
    id: "TXN-2024-001",
    property: "Modern Luxe Villa",
    customer: "Emily Johnson",
    amount: 1650500,
    type: "Purchase",
    status: "Completed",
    date: "2024-03-20",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "TXN-2024-002",
    property: "Seaside Penthouse",
    customer: "Michael Chen",
    amount: 2100000,
    type: "Purchase",
    status: "Pending",
    date: "2024-03-19",
    paymentMethod: "Wire Transfer",
  },
  {
    id: "TXN-2024-003",
    property: "Downtown Apartment",
    customer: "Sarah Williams",
    amount: 3500,
    type: "Rental",
    status: "Completed",
    date: "2024-03-18",
    paymentMethod: "Credit Card",
  },
  {
    id: "TXN-2024-004",
    property: "Garden Estate",
    customer: "David Martinez",
    amount: 96000,
    type: "Commission",
    status: "Completed",
    date: "2024-03-17",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "TXN-2024-005",
    property: "Beach House Villa",
    customer: "Lisa Anderson",
    amount: 1850000,
    type: "Purchase",
    status: "Failed",
    date: "2024-03-16",
    paymentMethod: "Wire Transfer",
  },
];

export default function Transactions() {
  const [searchQuery, setSearchQuery] = useState("");

  const totalRevenue = mockTransactions
    .filter((t) => t.status === "Completed")
    .reduce((sum, t) => sum + t.amount, 0);

  const pendingAmount = mockTransactions
    .filter((t) => t.status === "Pending")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Transactions</h1>
          <p className="text-slate-600">Track all financial transactions</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#07BE8A] to-emerald-600 text-white font-medium shadow-lg shadow-[#07BE8A]/30 hover:shadow-xl hover:shadow-[#07BE8A]/40 transition-all duration-300">
          <Download className="w-5 h-5" />
          Export Report
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Total Revenue</p>
              <h3 className="text-2xl font-semibold text-slate-900">
                ${(totalRevenue / 1000000).toFixed(2)}M
              </h3>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Pending</p>
              <h3 className="text-2xl font-semibold text-slate-900">
                ${(pendingAmount / 1000000).toFixed(2)}M
              </h3>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-1">Completed</p>
              <h3 className="text-2xl font-semibold text-slate-900">
                {mockTransactions.filter((t) => t.status === "Completed").length}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Search and filter */}
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900 placeholder:text-slate-400"
            />
          </div>
          <select className="px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900">
            <option>All Types</option>
            <option>Purchase</option>
            <option>Rental</option>
            <option>Commission</option>
          </select>
          <select className="px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900">
            <option>All Status</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Failed</option>
          </select>
        </div>
      </div>

      {/* Transactions table */}
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/40">
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Transaction ID</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Property</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Customer</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Amount</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Type</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-slate-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-white/20 hover:bg-white/40 transition-colors">
                  <td className="py-4 px-6">
                    <span className="font-mono text-sm text-slate-900">{transaction.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-900 font-medium">{transaction.property}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-700">{transaction.customer}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-semibold text-slate-900">
                      ${transaction.amount.toLocaleString()}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        transaction.type === "Purchase"
                          ? "bg-blue-100 text-blue-700"
                          : transaction.type === "Rental"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {transaction.type}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      {transaction.status === "Completed" ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                      ) : transaction.status === "Pending" ? (
                        <Clock className="w-4 h-4 text-orange-600" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-600" />
                      )}
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-medium ${
                          transaction.status === "Completed"
                            ? "bg-emerald-100 text-emerald-700"
                            : transaction.status === "Pending"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-slate-600">
                      {new Date(transaction.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
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
