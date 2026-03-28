import { useState } from "react";
import { Plus, Search, Edit, Trash2, FolderTree } from "lucide-react";

interface Category {
  id: number;
  name: string;
  slug: string;
  propertyCount: number;
  description: string;
  color: string;
}

const mockCategories: Category[] = [
  { id: 1, name: "Luxury Villa", slug: "luxury-villa", propertyCount: 45, description: "High-end luxury villas with premium amenities", color: "from-emerald-500 to-emerald-600" },
  { id: 2, name: "Modern Apartment", slug: "modern-apartment", propertyCount: 38, description: "Contemporary apartments in prime locations", color: "from-blue-500 to-blue-600" },
  { id: 3, name: "Beach House", slug: "beach-house", propertyCount: 28, description: "Stunning properties by the beach", color: "from-cyan-500 to-cyan-600" },
  { id: 4, name: "Penthouse", slug: "penthouse", propertyCount: 22, description: "Top-floor luxury penthouses", color: "from-purple-500 to-purple-600" },
  { id: 5, name: "Estate", slug: "estate", propertyCount: 18, description: "Large estate properties with extensive land", color: "from-orange-500 to-orange-600" },
  { id: 6, name: "Condo", slug: "condo", propertyCount: 35, description: "Modern condominiums", color: "from-pink-500 to-pink-600" },
];

export default function Categories() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Categories</h1>
          <p className="text-slate-600">Organize your properties into categories</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#07BE8A] to-emerald-600 text-white font-medium shadow-lg shadow-[#07BE8A]/30 hover:shadow-xl hover:shadow-[#07BE8A]/40 transition-all duration-300"
        >
          <Plus className="w-5 h-5" />
          Add Category
        </button>
      </div>

      {/* Search */}
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCategories.map((category) => (
          <div
            key={category.id}
            className="group rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
          >
            <div className="flex items-start gap-4">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                <FolderTree className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-1 truncate group-hover:text-[#07BE8A] transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">{category.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                    {category.propertyCount} Properties
                  </span>
                </div>
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

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Add New Category</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Category Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                  placeholder="Luxury Villa"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Slug</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                  placeholder="luxury-villa"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                  placeholder="Enter category description..."
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
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
