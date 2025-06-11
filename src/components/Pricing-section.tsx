import PricingCard from "./ui/pricing-card"
import FAQSection from "./faq-section"
import { Title1, Paragraph } from "./ui/typography"

export default function PricingSection() {
  return (
    <>
      <div className="bg-[#F9FAFB]">
        {/* Section d'en-tête avec fond spécial */}
        <div className="bg-[#ECF5FA] py-16">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <Title1 className="mb-3">
                Choisissez l'offre qui vous convient
              </Title1>
              <Paragraph className="text-[#6B7280] max-w-2xl mx-auto leading-[1.5]">
                Des plans flexibles pour répondre à tous les besoins. Commencez gratuitement ou optez pour plus de
                fonctionnalités.
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Section des cartes de prix */}
        <div className="container mx-auto px-6 py-16">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
                <PricingCard
                  title="Gratuit"
                  price="0 Ar"
                  description="Parfait pour découvrir l'application"
                  features={["Fonctionnalités de base", "Accès limité", "Support communautaire", "1 appareil"]}
                  recommended={false}
                  borderType="default"
                />

                <PricingCard
                  title="Premium"
                  price="15 000 Ar"
                  description="Idéal pour un usage personnel"
                  features={[
                    "Toutes les fonctionnalités de base",
                    "Accès illimité",
                    "Support prioritaire",
                    "2 appareils",
                    "Sans publicité",
                  ]}
                  recommended={true}
                  borderType="blue"
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
                  recommended={false}
                  borderType="blue"
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
                  recommended={false}
                  borderType="dark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section FAQ */}
      <FAQSection />
    </>
  )
}
