import { useState } from 'react';
import { Paragraph, Title2, Title3, Title4 } from '../components/ui/typography';
import { motion } from "framer-motion"

interface TeamMember {
  name: string;
  title: string;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alexandre Dupont', title: 'Fondateur & CEO', imageSrc: '../src/assets/img/Employe1.jpg' },
  { name: 'Sophie Martin', title: 'Directrice Technique', imageSrc: '../src/assets/img/Employe2.jpg' },
  { name: 'Thomas Lefèvre', title: 'Lead Developer', imageSrc: '../src/assets/img/Employe3.jpg' },
  { name: 'Marie Laurent', title: 'Directrice Marketing', imageSrc: '../src/assets/img/Employe4.jpg' },
  { name: 'Marc Tremblay', title: 'Développeur Full-Stack', imageSrc: '../src/assets/img/Employe5.jpg' },
  { name: 'Julie Dubois', title: 'Designer UX/UI', imageSrc: '../src/assets/img/Employe6.jpg' },
];

const TeamSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const membersPerPage = 3;
  const totalPages = Math.ceil(teamMembers.length / membersPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentMembers = teamMembers.slice(
    currentPage * membersPerPage,
    (currentPage + 1) * membersPerPage
  );

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <Title3 className="mb-10 text-center">Notre équipe</Title3>
      
      <div className="max-w-6xl mx-auto relative">
        <button
          onClick={prevPage}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
          aria-label="Previous team members"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextPage}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
          aria-label="Next team members"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 px-8">
          {currentMembers.map((member, index) => (
            <div 
              key={`${currentPage}-${index}`}
              className="flex flex-col items-center group"
            >
              <div className="mb-6 relative">
                <div className="w-32 h-32 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <Title4 className="text-[#012131] font-bold mb-2">{member.name}</Title4>
              <Paragraph className="text-gray-600">{member.title}</Paragraph>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentPage 
                  ? 'bg-[#028DD0] w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="min-h-screen bg-white"
    >
      {/* Section Introduction */}
      <div className="bg-gray-50 py-10 px-10 sm:px-6 lg:px-24 mb-10">
        <div className="max-w-6xl mx-auto">
          <Title2 className="mb-4">À propos de nous</Title2>
          <Paragraph className="max-w-3xl">
            Découvrez notre histoire, notre mission et ce qui nous rend uniques.
          </Paragraph>
        </div>
      </div>

      {/* Section Notre histoire */}
      <div className="max-w-6xl mx-auto mb-16 px-4 sm:px-6 lg:px-8">
        <Title3 className="mb-8 text-center sm:text-left">Notre histoire</Title3>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2">
            <Paragraph className="text-gray-700 mb-4">
              Fondée en 2021, notre entreprise est née d'une simple observation : les applications existantes ne
              répondaient pas aux besoins réels des utilisateurs. Nous avons donc décidé de créer une solution qui
              combine facilité d'utilisation, performances et fonctionnalités avancées.
            </Paragraph>
            <Paragraph className="text-gray-700">
              Après deux années de développement et de tests intensifs, nous avons lancé notre application qui est
              rapidement devenue une référence dans son domaine, avec plus de 3000 utilisateurs actifs.
            </Paragraph>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative h-[300px] sm:h-[400px] w-full max-w-[440px] mx-auto">
              <img
                src="/assets/img/Entreprise1.jpg"
                alt="Réunion d'équipe vue de dessus"
                className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover shadow-lg transform translate-x-0 sm:translate-x-8"
              />
              <img
                src="/assets/img/Entreprise2.jpg"
                alt="Réunion d'équipe"
                className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover shadow-lg transform -translate-x-0 sm:-translate-x-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Notre mission */}
      <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
        <Title3 className="mb-6">Notre mission</Title3>
        <Paragraph className="text-gray-700 max-w-4xl mx-auto">
          Notre mission est de simplifier le quotidien de nos utilisateurs grâce à des outils numériques innovants, 
          accessibles et sécurisés. Nous croyons fermement que la technologie doit être au service de l'humain, 
          et non l'inverse.
        </Paragraph>
      </div>

      {/* Section Nos valeurs */}
      <div className="mb-16 px-4 sm:px-6 lg:px-8">
        <Title3 className="mb-8 text-center sm:text-left lg:ml-24">Nos valeurs</Title3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg">
            <Paragraph className='text-[#012131] font-bold mb-2'>Innovation</Paragraph>
            <Paragraph>
              Nous repoussons constamment les limites pour offrir des solutions novatrices.
            </Paragraph>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <Paragraph className='text-[#012131] font-bold mb-2'>Qualité</Paragraph>
            <Paragraph>
              Nous nous engageons à fournir une expérience utilisateur exceptionnelle.
            </Paragraph>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <Paragraph className='text-[#012131] font-bold mb-2'>Accessibilité</Paragraph>
            <Paragraph>
              Nos produits sont conçus pour être utilisables par tous, sans exception.
            </Paragraph>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <Paragraph className='text-[#012131] font-bold mb-2'>Confiance</Paragraph>
            <Paragraph>
              La protection des données et la transparence sont au cœur de notre approche.
            </Paragraph>
          </div>
        </div>
      </div>

      <TeamSection />
    </motion.div>
  );
}

export default About;