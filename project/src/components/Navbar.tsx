import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Tree, 
  Search, 
  ShoppingCart, 
  User, 
  Menu,
  X,
  Sprout,
  Wheat,
  BookOpen,
  Phone
} from 'lucide-react';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Tree className="h-8 w-8" />
              <span className="text-xl font-bold">TreeCare</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/tree-care" className="hover:text-emerald-200 transition-colors flex items-center space-x-1">
              <Tree className="h-5 w-5" />
              <span>Tree Care</span>
            </Link>
            <Link to="/bonsai" className="hover:text-emerald-200 transition-colors flex items-center space-x-1">
              <Sprout className="h-5 w-5" />
              <span>Bonsai Care</span>
            </Link>
            <Link to="/krishi-help" className="hover:text-emerald-200 transition-colors flex items-center space-x-1">
              <Wheat className="h-5 w-5" />
              <span>Krishi Help</span>
            </Link>
            <Link to="/products" className="hover:text-emerald-200 transition-colors">
              Products
            </Link>
            <Link to="/blog" className="hover:text-emerald-200 transition-colors flex items-center space-x-1">
              <BookOpen className="h-5 w-5" />
              <span>Blog</span>
            </Link>
            <Link to="/contact" className="hover:text-emerald-200 transition-colors flex items-center space-x-1">
              <Phone className="h-5 w-5" />
              <span>Contact</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-emerald-600 rounded-full"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="relative hover:text-emerald-200 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/account" className="hover:text-emerald-200 transition-colors">
              <User className="h-6 w-6" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-emerald-600 rounded-full"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-emerald-600">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, products, or resources..."
                  className="w-full px-4 py-2 rounded-lg bg-emerald-800 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-emerald-300" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-emerald-600">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/tree-care"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-600"
            >
              Tree Care
            </Link>
            <Link
              to="/bonsai"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-600"
            >
              Bonsai Care
            </Link>
            <Link
              to="/krishi-help"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-600"
            >
              Krishi Help
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-600"
            >
              Products
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-600"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-emerald-600"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}