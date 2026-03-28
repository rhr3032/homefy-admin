import { useState } from "react";
import { Plus, Search, Edit, Trash2, Star, Quote } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
}

const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emily & John Smith",
    role: "Buyer",
    rating: 5,
    comment: "I found my ideal home in no time! The listings were detailed, the photos were stunning, and the support was exceptional.",
    image: "happy couple home",
    date: "2024-03-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Seller",
    rating: 5,
    comment: "Outstanding service! They helped me sell my property quickly and at a great price. Highly recommend!",
    image: "professional woman smiling",
    date: "2024-03-10",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Investor",
    rating: 4,
    comment: "Great platform for finding investment properties. The filtering system is excellent and saves a lot of time.",
    image: "asian businessman",
    date: "2024-03-05",
  },
  {
    id: 4,
    name: "Lisa Anderson",
    role: "Buyer",
    rating: 5,
    comment: "The virtual tours were amazing! I could view properties from anywhere and make an informed decision.",
    image: "blonde woman professional",
    date: "2024-02-28",
  },
];

export default function Testimonials() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Testimonials</h1>
          <p className="text-slate-600">Manage customer reviews and feedback</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#07BE8A] to-emerald-600 text-white font-medium shadow-lg shadow-[#07BE8A]/30 hover:shadow-xl hover:shadow-[#07BE8A]/40 transition-all duration-300"
        >
          <Plus className="w-5 h-5" />
          Add Testimonial
        </button>
      </div>

      {/* Search */}
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search testimonials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="group rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                <ImageWithFallback
                  src={`https://source.unsplash.com/200x200/?${encodeURIComponent(testimonial.image)}`}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">{testimonial.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{testimonial.role}</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <Quote className="w-8 h-8 text-[#07BE8A]/30" />
            </div>
            <p className="text-slate-700 mb-4 italic leading-relaxed">"{testimonial.comment}"</p>
            <div className="flex items-center justify-between pt-4 border-t border-white/40">
              <span className="text-xs text-slate-500">
                {new Date(testimonial.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg bg-white/60 hover:bg-white/80 text-slate-700 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg bg-white/60 hover:bg-red-50 text-red-600 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Testimonial Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Add New Testimonial</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Customer Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                  placeholder="Emily & John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Role</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50">
                  <option>Buyer</option>
                  <option>Seller</option>
                  <option>Investor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Rating</label>
                <select className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50">
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Testimonial</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                  placeholder="Enter customer testimonial..."
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
                  Add Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
