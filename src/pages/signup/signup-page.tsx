"use client"

import type React from "react"
import { useState } from "react"
import { User, Building, Mail, FileText, Eye, EyeOff, Check, Camera } from "lucide-react"
import { SocialButton } from "../../components/ui/social-button"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { Title3, Paragraph } from "../../components/ui/typography"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const inputClass = "w-full h-12 text-base"

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
    <div className="min-h-screen bg-[#F9FAFB] py-4 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Layout principal */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            {/* Colonne gauche */}
            <div className="space-y-4 sm:space-y-6">
              <Input
                label="Nom complet"
                placeholder="John Doe"
                icon={<User size={18} />}
                className={inputClass}
              />
              <Input
                type="email"
                label="Email"
                placeholder="exemple@email.com"
                icon={<Mail size={18} />}
                className={inputClass}
              />
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
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {/* Boutons juste sous le mot de passe sur desktop/tablette */}
              <div className="pt-6 sm:pt-8 hidden lg:block">
                <Button size="lg" className="w-full">
                  S'inscrire
                </Button>
                <div className="mt-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="text-[14px] font-inter text-[#647882]">ou</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    <SocialButton provider="google">Continuer avec Google</SocialButton>
                    <SocialButton provider="apple">Continuer avec Apple</SocialButton>
                  </div>
                </div>
              </div>
            </div>
            {/* Colonne droite : row aligné pour entreprise, NIF/STAT et profil */}
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                <div className="lg:col-span-4 flex flex-col gap-4">
                  <Input
                    label="Nom entreprise"
                    placeholder="Nom de votre entreprise"
                    icon={<Building size={18} />}
                    className={inputClass}
                  />
                  <Input
                    label="NIF/STAT"
                    placeholder="Numéro d'identification fiscale"
                    icon={<FileText size={18} />}
                    className={inputClass}
                  />
                </div>
                <div className="lg:col-span-1 flex flex-col items-center justify-center h-full mt-2 sm:mt-4 lg:mt-0">
                  <h3 className="text-[12px] sm:text-[13px] font-inter font-medium text-[#647882] mb-2 whitespace-nowrap">
                    Votre profil ici
                  </h3>
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
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
              {/* Card Pourquoi nous choisir */}
              <div className="bg-[#181F29]/80 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-lg mt-4 sm:mt-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-70">
                  <img
                    src="/assets/img/pourquoiNous.png"
                    alt="Pourquoi nous choisir"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <Title3 className="text-[20px] sm:text-[24px] font-inter font-bold text-white mb-4 sm:mb-6 text-center">
                    Pourquoi nous choisir ?
                  </Title3>
                  <ul className="space-y-3 sm:space-y-4 ml-0 text-left -ml-4">
                    <li className="flex items-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                        <FontAwesomeIcon icon={faCheck} className="text-white" style={{ fontSize: '16px' }} />
                      </div>
                      <Paragraph className="text-[14px] sm:text-[16px] font-inter text-white">
                        Interface intuitive et moderne
                      </Paragraph>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                        <FontAwesomeIcon icon={faCheck} className="text-white" style={{ fontSize: '16px' }} />
                      </div>
                      <Paragraph className="text-[14px] sm:text-[16px] font-inter text-white">
                        Support client 24/7
                      </Paragraph>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                        <FontAwesomeIcon icon={faCheck} className="text-white" style={{ fontSize: '16px' }} />
                      </div>
                      <Paragraph className="text-[14px] sm:text-[16px] font-inter text-white">
                        Mises à jour régulières
                      </Paragraph>
                    </li>
                    <li className="flex items-center gap-2 sm:gap-3">
                      <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></div>
                        <FontAwesomeIcon icon={faCheck} className="text-white" style={{ fontSize: '16px' }} />
                      </div>
                      <Paragraph className="text-[14px] sm:text-[16px] font-inter text-white">
                        Sécurité renforcée
                      </Paragraph>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Boutons toujours en bas sur mobile */}
          <div className="pt-6 sm:pt-8 block lg:hidden">
            <Button size="lg" className="w-full">
              S'inscrire
            </Button>
            <div className="mt-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="text-[14px] font-inter text-[#647882]">ou</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <SocialButton provider="google">Continuer avec Google</SocialButton>
                <SocialButton provider="apple">Continuer avec Apple</SocialButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
