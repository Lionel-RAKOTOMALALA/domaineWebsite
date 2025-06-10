import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold block">
              AppName
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Simplifiez votre quotidien avec notre application innovante.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Offres
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Télécharger
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors text-sm">
                  S'inscrire
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone size={16} />
                +261 34 12 345 67
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail size={16} />
                contact@appname.com
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <MapPin size={16} />
                Antananarivo, Madagascar
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-300 text-sm">Restez informé de nos dernières actualités</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2.5 rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 text-sm focus:border-blue-400 focus:outline-none transition-colors"
              />
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 AppName. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
