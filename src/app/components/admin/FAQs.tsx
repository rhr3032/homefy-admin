import { useState } from "react";
import { Plus, Search, Edit, Trash2, ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  order: number;
  isExpanded?: boolean;
}

const mockFAQs: FAQ[] = [
  {
    id: 1,
    question: "How do I start the home buying process?",
    answer: "Begin by determining your budget, getting pre-approved for a mortgage, and then browsing our listings. Our team of experts is available to guide you through every step of the process.",
    category: "Buying",
    order: 1,
  },
  {
    id: 2,
    question: "What documents do I need to sell my property?",
    answer: "You'll need property title documents, recent tax statements, mortgage information (if applicable), property disclosure forms, and any renovation or repair records.",
    category: "Selling",
    order: 2,
  },
  {
    id: 3,
    question: "How long does the typical home sale take?",
    answer: "On average, the home selling process takes 60-90 days from listing to closing. However, this can vary based on market conditions, property type, and pricing strategy.",
    category: "Selling",
    order: 3,
  },
  {
    id: 4,
    question: "Can I view properties virtually?",
    answer: "Yes! We offer comprehensive virtual tours for most of our listings, allowing you to explore properties from the comfort of your home.",
    category: "General",
    order: 4,
  },
  {
    id: 5,
    question: "What are closing costs?",
    answer: "Closing costs are fees paid at the closing of a real estate transaction. These typically include loan origination fees, appraisal fees, title insurance, and attorney fees, usually ranging from 2-5% of the purchase price.",
    category: "Buying",
    order: 5,
  },
];

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">FAQs</h1>
          <p className="text-slate-600">Manage frequently asked questions</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#07BE8A] to-emerald-600 text-white font-medium shadow-lg shadow-[#07BE8A]/30 hover:shadow-xl hover:shadow-[#07BE8A]/40 transition-all duration-300"
        >
          <Plus className="w-5 h-5" />
          Add FAQ
        </button>
      </div>

      {/* Search and filter */}
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900 placeholder:text-slate-400"
            />
          </div>
          <select className="px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900">
            <option>All Categories</option>
            <option>General</option>
            <option>Buying</option>
            <option>Selling</option>
          </select>
        </div>
      </div>

      {/* FAQs list */}
      <div className="space-y-4">
        {mockFAQs.map((faq) => (
          <div
            key={faq.id}
            className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  className="flex-1 flex items-start gap-3 text-left group"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#07BE8A] to-emerald-600 flex items-center justify-center text-white flex-shrink-0">
                    {expandedId === faq.id ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#07BE8A] transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                </button>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg bg-white/60 hover:bg-white/80 text-slate-700 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/60 hover:bg-red-50 text-red-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {expandedId === faq.id && (
                <div className="mt-4 pl-11">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Add FAQ Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Add New FAQ</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Question</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                  placeholder="Enter question..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50">
                  <option>General</option>
                  <option>Buying</option>
                  <option>Selling</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Answer</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                  placeholder="Enter answer..."
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-6 py-3 rounded-xl bg-white/60 hover:bg-white/80 text-slate-700 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-[#07BE8A] to-emerald-600 text-white font-medium shadow-lg shadow-[#07BE8A]/30 hover:shadow-xl hover:shadow-[#07BE8A]/40 transition-all duration-300"
                >
                  Add FAQ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
