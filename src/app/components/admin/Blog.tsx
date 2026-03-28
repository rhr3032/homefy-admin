import { useState } from "react";
import { Plus, Search, Edit, Trash2, Eye, Calendar, Tag } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  status: "Published" | "Draft" | "Scheduled";
  views: number;
  image: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Tips for First-Time Home Buyers",
    excerpt: "Essential advice for navigating your first home purchase journey...",
    author: "Sarah Johnson",
    date: "2024-03-20",
    category: "Buying Guide",
    status: "Published",
    views: 1245,
    image: "couple buying home",
  },
  {
    id: 2,
    title: "Real Estate Market Trends 2024",
    excerpt: "Analyzing the latest trends shaping the real estate market...",
    author: "Michael Chen",
    date: "2024-03-18",
    category: "Market Insights",
    status: "Published",
    views: 892,
    image: "real estate market analysis",
  },
  {
    id: 3,
    title: "How to Stage Your Home for Quick Sale",
    excerpt: "Professional staging tips to attract buyers and maximize value...",
    author: "Lisa Anderson",
    date: "2024-03-25",
    category: "Selling Tips",
    status: "Scheduled",
    views: 0,
    image: "staged home interior",
  },
  {
    id: 4,
    title: "Investment Properties: A Beginner's Guide",
    excerpt: "Everything you need to know about investing in real estate...",
    author: "David Miller",
    date: "2024-03-15",
    category: "Investment",
    status: "Draft",
    views: 0,
    image: "investment property",
  },
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900 mb-2">Blog Posts</h1>
          <p className="text-slate-600">Create and manage your blog content</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#07BE8A] to-emerald-600 text-white font-medium shadow-lg shadow-[#07BE8A]/30 hover:shadow-xl hover:shadow-[#07BE8A]/40 transition-all duration-300"
        >
          <Plus className="w-5 h-5" />
          New Post
        </button>
      </div>

      {/* Search and filters */}
      <div className="rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900 placeholder:text-slate-400"
            />
          </div>
          <select className="px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900">
            <option>All Categories</option>
            <option>Buying Guide</option>
            <option>Selling Tips</option>
            <option>Market Insights</option>
            <option>Investment</option>
          </select>
          <select className="px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50 text-slate-900">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
            <option>Scheduled</option>
          </select>
        </div>
      </div>

      {/* Blog posts list */}
      <div className="space-y-4">
        {mockPosts.map((post) => (
          <div
            key={post.id}
            className="group rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 p-6"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Post image */}
              <div className="w-full sm:w-48 h-32 rounded-xl overflow-hidden bg-slate-200 flex-shrink-0">
                <ImageWithFallback
                  src={`https://source.unsplash.com/600x400/?${encodeURIComponent(post.image)}`}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Post content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-[#07BE8A] transition-colors">
                    {post.title}
                  </h3>
                  <div
                    className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap ${
                      post.status === "Published"
                        ? "bg-emerald-100 text-emerald-700"
                        : post.status === "Draft"
                        ? "bg-slate-100 text-slate-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {post.status}
                  </div>
                </div>
                <p className="text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span>{post.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{post.views.toLocaleString()} views</span>
                  </div>
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 text-slate-700 transition-colors">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 hover:bg-white/80 text-slate-700 transition-colors">
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button className="p-2 rounded-lg bg-white/60 hover:bg-red-50 text-red-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Post Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Create New Post</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Post Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                  placeholder="Enter post title..."
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50">
                    <option>Buying Guide</option>
                    <option>Selling Tips</option>
                    <option>Market Insights</option>
                    <option>Investment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50">
                    <option>Draft</option>
                    <option>Published</option>
                    <option>Scheduled</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Excerpt</label>
                <textarea
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                  placeholder="Brief summary..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Content</label>
                <textarea
                  rows={8}
                  className="w-full px-4 py-3 rounded-xl bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#07BE8A]/50"
                  placeholder="Write your post content..."
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
                  Create Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
