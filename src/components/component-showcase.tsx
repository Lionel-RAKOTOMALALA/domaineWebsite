import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Title1, Title2, Title3, Title4, Paragraph } from "./ui/typography"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { PricingCard } from "./ui/pricing-card"
import { FeatureCard } from "./ui/feature-card"
import { SocialButton } from "./ui/social-button"

const ComponentShowcase = () => {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="min-h-screen bg-[#F5F9FA]">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <Title2>Système de Design - AppName</Title2>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 space-y-16">
        {/* Typography Section */}
        <section className="space-y-8">
          <Title2>Typographie</Title2>
          <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            <Title1>Title1 - Titre Principal (40px, Bold)</Title1>
            <Title2>Title2 - Sous-titre (26px, Bold)</Title2>
            <Title3>Title3 - Titre de Section (20px, Bold)</Title3>
            <Title4>Title4 - Titre de Carte (18px, Semi-Bold)</Title4>
            <Paragraph>
              Paragraphe - Texte de contenu standard avec une couleur plus douce pour une meilleure lisibilité (16px,
              Regular)
            </Paragraph>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="space-y-8">
          <Title2>Boutons</Title2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <Title4>Boutons Primaires</Title4>
                <div className="space-y-3">
                  <Button size="sm">Petit bouton</Button>
                  <Button size="md">Bouton moyen</Button>
                  <Button size="lg">Grand bouton</Button>
                </div>
              </div>
              <div className="space-y-4">
                <Title4>Boutons Outline</Title4>
                <div className="space-y-3">
                  <Button variant="outline" size="sm">
                    Petit outline
                  </Button>
                  <Button variant="outline" size="md">
                    Moyen outline
                  </Button>
                  <Button variant="outline" size="lg">
                    Grand outline
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <Title4>Boutons Secondaires</Title4>
                <div className="space-y-3">
                  <Button variant="secondary" size="sm">
                    Petit secondaire
                  </Button>
                  <Button variant="secondary" size="md">
                    Moyen secondaire
                  </Button>
                  <Button variant="secondary" size="lg">
                    Grand secondaire
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="space-y-8">
          <Title2>Champs de Saisie</Title2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Nom complet"
                placeholder="John Doe"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input label="Email" type="email" placeholder="exemple@email.com" />
              <Input label="Mot de passe" type="password" placeholder="••••••••" />
              <Input label="Champ avec erreur" placeholder="Valeur incorrecte" error="Ce champ est requis" />
            </div>
          </div>
        </section>

        {/* Social Buttons Section */}
        <section className="space-y-8">
          <Title2>Boutons Sociaux</Title2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="max-w-md space-y-4">
              <SocialButton provider="google">Continuer avec Google</SocialButton>
              <SocialButton provider="apple">Continuer avec Apple</SocialButton>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="space-y-8">
          <Title2>Cartes</Title2>
          <div className="space-y-8">
            {/* Basic Cards */}
            <div>
              <Title3 className="mb-6">Cartes Basiques (avec animation au scroll)</Title3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card animated>
                  <Title4 className="mb-3">Carte Simple</Title4>
                  <Paragraph>Une carte basique avec animation d'apparition au scroll.</Paragraph>
                </Card>
                <Card animated>
                  <Title4 className="mb-3">Avec Checkbox</Title4>
                  <div className="space-y-3">
                    <Checkbox checked label="Fonctionnalité incluse" />
                    <Checkbox checked label="Support 24/7" />
                    <Checkbox label="Option premium" />
                  </div>
                </Card>
                <Card animated>
                  <Title4 className="mb-3">Avec Bouton</Title4>
                  <Paragraph className="mb-4">Carte avec action intégrée.</Paragraph>
                  <Button size="sm">Action</Button>
                </Card>
              </div>
            </div>

            {/* Feature Cards */}
            <div>
              <Title3 className="mb-6">Cartes de Fonctionnalités</Title3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  number="1"
                  title="Simple d'utilisation"
                  description="Interface intuitive conçue pour tous les utilisateurs, quel que soit leur niveau technique."
                />
                <FeatureCard
                  number="2"
                  title="Performances optimales"
                  description="Application légère et rapide, offrant une expérience fluide sur tous les appareils."
                />
                <FeatureCard
                  number="3"
                  title="Sécurité avancée"
                  description="Protection de vos données avec les dernières technologies de chiffrement."
                />
              </div>
            </div>

            {/* Pricing Cards */}
            <div>
              <Title3 className="mb-6">Cartes de Tarification</Title3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <PricingCard
                  title="Gratuit"
                  price="0 Ar"
                  description="Parfait pour découvrir l'application"
                  features={["Fonctionnalités de base", "Accès limité", "Support communautaire", "1 appareil"]}
                  buttonText="Commencer"
                />
                <PricingCard
                  title="Premium"
                  price="15 000 Ar"
                  description="Idéal pour un usage personnel"
                  recommended
                  features={[
                    "Toutes les fonctionnalités de base",
                    "Accès illimité",
                    "Support prioritaire",
                    "2 appareils",
                    "Sans publicité",
                  ]}
                />
                <PricingCard
                  title="Platinum"
                  price="30 000 Ar"
                  description="Pour les utilisateurs exigeants"
                  features={[
                    "Toutes les fonctionnalités Premium",
                    "Fonctionnalités exclusives",
                    "Support dédié 24/7",
                    "5 appareils",
                    "Accès aux mises à jour anticipées",
                  ]}
                />
                <PricingCard
                  title="VIP"
                  price="75 000 Ar"
                  description="L'expérience ultime"
                  features={[
                    "Toutes les fonctionnalités Platinum",
                    "Accès à vie aux mises à jour",
                    "Assistance personnalisée",
                    "Appareils illimités",
                    "Formation personnalisée",
                    "Fonctionnalités sur mesure",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Background Colors Section */}
        <section className="space-y-8">
          <Title2>Couleurs de Fond</Title2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F5F9FA] p-8 rounded-lg border">
              <Title4 className="mb-2">Fond Principal</Title4>
              <Paragraph>Couleur: #F5F9FA</Paragraph>
            </div>
            <div className="bg-[#ECF5FA] p-8 rounded-lg border">
              <Title4 className="mb-2">Fond Section Bleue</Title4>
              <Paragraph>Couleur: #ECF5FA</Paragraph>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ComponentShowcase
