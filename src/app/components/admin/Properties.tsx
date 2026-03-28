import { useState } from "react";
import { Plus, Search, Edit, Trash2, Eye, MapPin, DollarSign, Bed, Bath } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  category: string;
  status: "Available" | "Sold" | "Pending";
  image: string;
}

const mockProperties: Property[] = [
  {
    id: 1,
    title: "Modern Luxe Villa",
    location: "Beverly Hills, CA",
    price: "$1,650,500",
    bedrooms: 4,
    bathrooms: 3,
    area: "350m²",
    category: "Luxury Villa",
    status: "Available",
    image: "modern luxury villa",
  },
  {
    id: 2,
    title: "Seaside Penthouse",
    location: "Miami Beach, FL",
    price: "$2,100,000",
    bedrooms: 5,
    bathrooms: 4,
    area: "420m²",
    category: "Penthouse",
    status: "Available",
    image: "modern penthouse sea view",
  },
  {
    id: 3,
    title: "Downtown Apartment",
    location: "New York, NY",
    price: "$850,000",
    bedrooms: 2,
    bathrooms: 2,
    area: "180m²",
    category: "Apartment",
    status: "Sold",
    image: "modern apartment interior",
  },
  {
    id: 4,
    title: "Garden Estate",
    location: "Malibu, CA",
    price: "$3,200,000",
    bedrooms: 6,
    bathrooms: 5,
    area: "550m²",
    category: "Estate",
    status: "Pending",
    image: "luxury estate garden",
  },
];

export default function Properties() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Properties</h1>
          <p className="text-slate-600">Manage your real estate listings</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#07BE8A] to-emerald-600 text-white font-medium shadow-lg shadow-[#07BE8A]/30 hover:shadow-xl hover:shadow-[#07BE8A]/40 transition-all duration-300"
        >
          <Plus className="w-5 h-5" />
          Add Property
        </button>
      </div>

      {/* Search and filters */}
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900 placeholder:text-slate-400"
            />
          </div>
          <select className="px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900">
            <option>All Categories</option>
            <option>Luxury Villa</option>
            <option>Apartment</option>
            <option>Penthouse</option>
            <option>Estate</option>
          </select>
          <select className="px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900">
            <option>All Status</option>
            <option>Available</option>
            <option>Sold</option>
            <option>Pending</option>
          </select>
        </div>
      </div>

      {/* Properties grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockProperties.map((property) => (
          <div
            key={property.id}
            className="group rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Property image */}
            <div className="relative h-48 overflow-hidden bg-slate-200">
              <ImageWithFallback
                src={`https://source.unsplash.com/800x600/?${encodeURIComponent(property.image)}`}
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-sm ${
                  property.status === "Available"
                    ? "bg-emerald-500/90 text-white"
                    : property.status === "Sold"
                    ? "bg-slate-500/90 text-white"
                    : "bg-orange-500/90 text-white"
                }`}
              >
                {property.status}
              </div>
            </div>

            {/* Property details */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#07BE8A] transition-colors">
                {property.title}
              </h3>
              <div className="flex items-center gap-2 text-slate-600 mb-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{property.location}</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[#07BE8A]" />
                <span className="text-xl font-semibold text-slate-900">{property.price}</span>
              </div>
              <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span>{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span>{property.bathrooms} Baths</span>
                </div>
                <div>
                  <span>{property.area}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-white/40">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 text-slate-700 transition-colors">
                  <Eye className="w-4 h-4" />
                  View
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 text-slate-700 transition-colors">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="p-2 rounded-lg bg-white/60 hover:bg-red-50 text-red-600 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Property Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Add New Property</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Property Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                    placeholder="Modern Luxe Villa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                    placeholder="Beverly Hills, CA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Price</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                    placeholder="$1,650,500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50">
                    <option>Luxury Villa</option>
                    <option>Apartment</option>
                    <option>Penthouse</option>
                    <option>Estate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Bedrooms</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                    placeholder="4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Bathrooms</label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                    placeholder="3"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                  placeholder="Enter property description..."
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
                  Add Property
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
