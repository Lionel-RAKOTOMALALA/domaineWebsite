import React from 'react'
import { Paragraph, Title2, Title3 } from '../components/ui/typography';
import { Button } from '../components/ui/button';
import { motion } from "framer-motion"

const Download = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="min-h-screen flex flex-col items-center justify-start"
    >
      <div className="text-center mb-16 max-w-2xl mx-auto px-4">
        <Title2 className='mb-4 mt-12'> Téléchargez dès maintenant</Title2>
        <Paragraph>une expérience fluide et optimisée pour booster votre productivité sur ordinateur</Paragraph>
        <Button className="mt-8" size="md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Lancer le téléchargement</Button>
      </div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 bg-[#ffffff] p-4 md:p-8 rounded-lg mx-4">
        <div className="mb-0 md:mb-[-31.5px] flex-shrink-0 w-full md:w-1/2 flex justify-center">
          <img
            src="../src/assets/img/VersBas.png" 
            alt="Homme montre offre"
            className="mb-[-31.5px] w-full h-auto max-w-sm object-contain rounded-lg md:hidden"
          />
          <img
            src="../src/assets/img/imgOffre.png" 
            alt="Homme montre offre"
            className="w-full h-auto object-contain rounded-lg hidden md:block"
          />
        </div>
        <div className="bg-[#028DD0] text-white p-6 md:p-8 rounded-lg shadow-xl w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <Title3 className='text-white mb-4'> Version Pro</Title3>
            <Paragraph className='mb-6 text-white'>Débloquez toutes les fonctionnalités avancées et profitez d'une expérience premium.</Paragraph>
          </div>
          <Button className="px-6 py-3 self-start" variant="secondary" size="md">Découvrir les offres</Button>
        </div>
      </div>

    </motion.div>
  );
}

export default Download