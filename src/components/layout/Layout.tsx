import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { motion } from "framer-motion"

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}

export default Layout 