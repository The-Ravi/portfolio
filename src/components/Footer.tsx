'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-6 bg-black/40 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ravi Mishra
            </h3>
            <p className="text-gray-300 mb-4">
              Full Stack Developer passionate about creating innovative solutions 
              with modern technologies.
            </p>
            <div className="flex justify-center md:justify-start space-x-2">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                Available for hire
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="block text-gray-300 hover:text-purple-300 transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {[
                'Java', 'Spring Boot', 'React', 'Next.js', 
                'AWS', 'Node.js', 'SQL', 'Gen AI'
              ].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1 }}
                  className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-sm hover:bg-purple-600/20 hover:text-purple-300 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center justify-center md:justify-start text-center md:text-left"
            >
              © {currentYear} Ravi Mishra. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-1"
              >
                <Heart className="text-red-500" size={16} />
              </motion.span>
              and lots of coffee ☕
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="glass rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-gray-300 text-sm">
              🚀 This portfolio is built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Designed and developed with attention to performance, accessibility, and user experience
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>
    </footer>
  )
}

export default Footer