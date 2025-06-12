import React from "react";
import { Paragraph, Title1, Title2} from "../components/ui/typography";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { 
    opacity: 0,
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Home: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-16 pb-10 md:pb-20 bg-gradient-to-br to-white overflow-hidden">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-6xl"
        >
          <motion.div 
            variants={heroItem}
            className="md:w-1/2 text-center md:text-left md:mb-0"
          >
            <motion.div variants={heroItem}>
              <Title1 className="mb-10">
                Découvrez notre <br /> application <br /> révolutionnaire
              </Title1>
            </motion.div>
            <motion.div variants={heroItem}>
              <Paragraph className="mb-10">
                Une solution complète pour tous vos besoins quotidiens. <br />{" "}
                Simple, efficace et moderne.
              </Paragraph>
            </motion.div>
            <motion.div 
              variants={heroItem}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="md">
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
                  Télécharger
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="md">
                  En savoir plus
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={heroItem}
            className="md:w-1/2 flex justify-center md:justify-end relative"
          >
            <div className="relative w-full max-w-xl">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                src="/assets/img/bgLaptop.png"
                alt="App interface"
                className="absolute inset-0 object-cover rounded-lg z-0"
                style={{
                  top: "6%",
                  left: "20%",
                  right: "10%",
                  bottom: "10%",
                  width: "75%",
                  height: "82%",
                }}
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                src="/assets/img/Laptop.png"
                alt="Laptop displaying app interface"
                className="w-full rounded-lg relative z-10"
              />
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute mt-24 left-4 sm:top-10 sm:left-10 bg-white py-3 px-4 rounded-full shadow-lg z-20 text-sm font-semibold flex items-center"
              >
                <span className="text-[#028DD0] text-sm sm:text-ml font-bold">
                  + 3k
                </span>
                <span className="text-[#012131] ml-1">Utilisateurs</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 bg-white text-[#012131] py-3 px-4 rounded-full shadow-lg z-20 text-sm font-semibold"
              >
                Facile à utiliser
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white mb-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Title2 className="text-center mb-12">
              Fonctionnalités principales
            </Title2>
          </motion.div>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white p-8 rounded-lg shadow-md text-left border border-gray-200"
              >
                <div className="flex items-center justify-center w-10 h-10 bg-[#ECF5FA] text-[#028DD0] rounded-full mb-6 text-xl font-bold">
                  {num}
                </div>
                <Paragraph className="font-bold text-gray-800 mb-3">
                  {num === 1 && "Simple d'utilisation"}
                  {num === 2 && "Performances optimales"}
                  {num === 3 && "Sécurité avancée"}
                </Paragraph>
                <Paragraph>
                  {num === 1 && "Interface intuitive, facile à prendre en main pour tous les utilisateurs, quel que soit leur niveau technique."}
                  {num === 2 && "Application légère et rapide, offrant une expérience fluide sur tous les appareils."}
                  {num === 3 && "Protection de vos données avec les dernières techniques de chiffrement."}
                </Paragraph>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#ECF5FA]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center max-w-4xl"
        >
          <Title2 className="mb-6">Prêt à commencer ?</Title2>
          <Paragraph className="mb-10">
            Rejoignez des milliers d'utilisateurs satisfaits et découvrez
            comment notre <br /> application peut transformer votre quotidien.
          </Paragraph>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm">Voir les offres</Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" size="sm" className="bg-transparent">
                S'inscrire maintenant
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;