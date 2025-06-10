import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()
  
  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-blue-600 font-bold text-xl">
            AppName
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              À propos
            </Link>
            <Link 
              to="/pricing"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/pricing' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Offres
            </Link>
            <Link 
              to="/download"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/download' 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Télécharger
            </Link>
          </div>

          {/* CTA Button */}
          <Link 
            to="/register" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            S'inscrire
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
