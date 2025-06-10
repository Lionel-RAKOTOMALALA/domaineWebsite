"use client"

import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const MobileHeader = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-blue-600 font-bold text-xl">
            AppName
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/about" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              À propos
            </Link>
            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/pricing" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Offres
            </Link>
            <Link
              to="/download"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/download" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Télécharger
            </Link>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              to="/register"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              S'inscrire
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-4 pt-4">
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === "/about" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                to="/pricing"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === "/pricing" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Offres
              </Link>
              <Link
                to="/download"
                className={`text-sm font-medium transition-colors ${
                  location.pathname === "/download" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Télécharger
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default MobileHeader
