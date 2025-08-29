

import { useState } from "react";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Logo */}
        <div className="mr-6 flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500"></div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            LearnHub
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="mr-4 hidden md:flex">
          <Link to={"/"} className="text-sm font-medium transition-colors hover:text-indigo-600 mr-6" >
            Home
          </Link>

          <Link to={"/"} className="text-sm font-medium transition-colors hover:text-indigo-600 mr-6">
            Courses
          </Link>

          <Link to={"/"} className="text-sm font-medium transition-colors hover:text-indigo-600 mr-6">

            About

          </Link>
          <Link to={"/"} className="text-sm font-medium transition-colors hover:text-indigo-600 mr-6">
            Contact
          </Link>



        </div>

        {/* Search Bar + Buttons */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Search */}
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <input
                placeholder="Search courses..."
                className="pl-8 pr-4 py-2 w-full md:w-[300px] rounded-md border border-gray-300 bg-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Cart */}
            <button className="p-2 rounded-md hover:bg-gray-100 transition">
              <ShoppingCart className="h-4 w-4" />
            </button>
            {/* Login */}


            <Link to={"/auth"}  className="px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-100 transition">   Login</Link>

         <Link to={"/auth"} className="px-4 py-2 text-sm rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 transition">
           Sign Up
         
         </Link>
              
          </div>

          {/* Mobile menu button */}
          <button
            className="p-2 rounded-md hover:bg-gray-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t md:hidden bg-white">
          <div className="grid gap-3 px-6 pb-4 pt-4">
            <a className="text-sm font-medium" href="/">Home</a>
            <a className="text-sm font-medium" href="/courses">Courses</a>
            <a className="text-sm font-medium" href="/about">About</a>
            <a className="text-sm font-medium" href="/contact">Contact</a>
            <div className="flex gap-2 pt-2">
              <a
                href="/auth"
                className="flex-1 px-4 py-2 text-sm rounded-md border border-gray-300 text-center hover:bg-gray-100 transition"
              >
                Login
              </a>
              <a
                href="/auth"
                className="flex-1 px-4 py-2 text-sm rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center hover:opacity-90 transition"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
