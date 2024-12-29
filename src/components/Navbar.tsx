"use client";
import React, { useState } from "react";
import { Search, ShoppingCart, Heart, Menu, X, User } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-100 to-purple-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Website Name */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <div className="relative w-12 h-12 bg-white rounded-full shadow-md overflow-hidden">
                <Image
                  src="/logo.avif"
                  alt="Beauty Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Gleam
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
            >
              Shop
            </Link>
            <Link
              href="/new-arrivals"
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
            >
              New In
            </Link>
            <Link
              href="/brands"
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
            >
              Brands
            </Link>
          </div>

          {/* Search, Cart, and Wishlist */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                className="w-64 pl-10 pr-4 py-2 rounded-full border-pink-200 focus:border-pink-500 focus:ring-pink-500 bg-white/90 backdrop-blur-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/account"
                className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
              >
                <User className="w-6 h-6" />
              </Link>
              <Link
                href="/wishlist"
                className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
              >
                <Heart className="w-6 h-6" />
              </Link>
              <Link
                href="/cart"
                className="p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-sm rounded-b-2xl shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <div className="relative mb-4">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 rounded-full border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
              <Link
                href="/"
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 py-2"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 py-2"
              >
                Shop
              </Link>
              <Link
                href="/new-arrivals"
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 py-2"
              >
                New In
              </Link>
              <Link
                href="/brands"
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 py-2"
              >
                Brands
              </Link>
              <div className="flex items-center justify-around pt-4 border-t border-pink-100">
                <Link
                  href="/account"
                  className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
                >
                  <User className="w-6 h-6" />
                  <span>Account</span>
                </Link>
                <Link
                  href="/wishlist"
                  className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
                >
                  <Heart className="w-6 h-6" />
                  <span>Wishlist</span>
                </Link>
                <Link
                  href="/cart"
                  className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Cart</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;