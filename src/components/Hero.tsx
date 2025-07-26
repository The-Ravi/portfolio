'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-6"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full bg-white p-1"
          >
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <span className="text-4xl font-bold text-white">RM</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text">
            Ravi Mishra
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-4"
        >
          Full Stack Developer with{' '}
          <span className="text-white font-semibold">6 years</span> of experience
          crafting scalable applications with Java, Spring Boot, React, and AWS
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-4"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-3 py-2 sm:px-4 bg-white/10 text-white rounded-full border border-white/20 text-sm sm:text-base"
          >
            Java & Spring Boot Expert
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-3 py-2 sm:px-4 bg-white/10 text-white rounded-full border border-white/20 text-sm sm:text-base"
          >
            React & Next.js
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-3 py-2 sm:px-4 bg-white/10 text-white rounded-full border border-white/20 text-sm sm:text-base"
          >
            AWS & Cloud
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-3 py-2 sm:px-4 bg-white/10 text-white rounded-full border border-white/20 text-sm sm:text-base"
          >
            Gen AI
          </motion.span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 px-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 text-center"
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 text-center"
          >
            View Projects
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ravimishra97/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:ravimishra1997@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-white/60" size={32} />
      </motion.div>
    </section>
  )
}

export default Hero