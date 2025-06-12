import { Title1, Title3, Paragraph } from "./ui/typography"

export default function FAQSection() {
    const faqs = [
      {
        question: "Comment puis-je changer d'offre ?",
        answer:
          "Vous pouvez facilement mettre à niveau ou rétrograder votre plan à tout moment depuis votre compte. Les ajustements de facturation seront calculés au prorata.",
      },
      {
        question: "Y a-t-il un engagement de durée ?",
        answer:
          "Non, tous nos plans sont sans engagement. Vous pouvez annuler à tout moment et votre abonnement restera actif jusqu'à la fin de la période de facturation en cours.",
      },
      {
        question: "Les mises à jour sont-elles incluses ?",
        answer:
          "Oui, toutes les mises à jour régulières sont incluses dans votre abonnement. Les plans Platinum et VIP bénéficient d'un accès anticipé aux nouvelles fonctionnalités.",
      },
    ]
  
    return (
      <div className="bg-[#F9FAFB] py-16">
        <div className="container mx-auto px-6">
          {/* Titre de la section */}
          <div className="text-center mb-12">
            <Title1>Questions fréquentes</Title1>
          </div>
  
          {/* Liste des FAQ */}
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#F3F4F6] rounded-lg p-6">
                <Title3 className="text-[#111827] mb-3">{faq.question}</Title3>
                <Paragraph className="text-[#6B7280] leading-relaxed">{faq.answer}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  