"use client"

import type React from "react"
import { useState } from "react"
import { User, Building, Mail, FileText, Eye, EyeOff, Check, Camera } from "lucide-react"
import { SocialButton } from "../../components/ui/social-button"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [profileImage, setProfileImage] = useState<string | null>(null)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire - 2/3 de l'espace */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
              <div className="max-w-2xl">
                <h1 className="text-[28px] font-inter font-bold text-[#023246] mb-2">Créer votre compte</h1>
                <p className="text-[16px] font-inter font-normal text-[#647882] mb-8">
                  Commencez votre expérience dès aujourd'hui
                </p>

                {/* Première ligne : Nom complet et Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Input label="Nom complet" placeholder="John Doe" icon={<User size={18} />} />
                  <Input type="email" label="Email" placeholder="exemple@email.com" icon={<Mail size={18} />} />
                </div>

                {/* Deuxième ligne : Nom entreprise et NIF/STAT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Input label="Nom entreprise" placeholder="Nom de votre entreprise" icon={<Building size={18} />} />
                  <Input label="NIF/STAT" placeholder="Numéro d'identification fiscale" icon={<FileText size={18} />} />
                </div>

                {/* Mot de passe */}
                <div className="mb-8 max-w-md">
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      label="Mot de passe"
                      placeholder="••••••••"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      }
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="max-w-md">
                  <Button size="lg" className="w-full mb-6">
                    S'inscrire
                  </Button>

                  <div className="flex items-center mb-6">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-[14px] font-inter text-[#647882]">ou</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>

                  <div className="space-y-3">
                    <SocialButton provider="google">Continuer avec Google</SocialButton>
                    <SocialButton provider="apple">Continuer avec Apple</SocialButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section de droite - 1/3 de l'espace */}
          <div className="lg:col-span-1 space-y-6">
            {/* Espacement pour aligner avec les champs Nom entreprise et NIF/STAT */}
            <div className="h-[120px]"></div>

            {/* Section Votre profil ici */}
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <h3 className="text-[16px] font-inter font-medium text-[#647882] mb-4">Votre profil ici</h3>
              <div className="flex justify-center">
                <div className="relative w-20 h-20 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                  {profileImage ? (
                    <img
                      src={profileImage || "/placeholder.svg"}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <Camera size={20} className="text-gray-400" />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Section Pourquoi nous choisir */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <h2 className="text-[20px] font-inter font-bold text-white mb-6">Pourquoi nous choisir ?</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-[14px] font-inter text-white">Interface intuitive et moderne</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-[14px] font-inter text-white">Support client 24/7</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-[14px] font-inter text-white">Mises à jour régulières</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-[14px] font-inter text-white">Sécurité renforcée</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
