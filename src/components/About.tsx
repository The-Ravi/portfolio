'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code, Database, Cloud, Brain, User } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [imageError, setImageError] = useState(false)
  
  // Helper function to get the correct image path for GitHub Pages
  const getImagePath = (path: string) => {
    // Add basePath for production deployment
    const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''
    return `${basePath}${path}`
  }

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

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in both frontend and backend technologies with 6 years of hands-on experience"
    },
    {
      icon: Database,
      title: "Database & Architecture",
      description: "Proficient in SQL, Redis, and designing scalable system architectures"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS certified with experience in Lambda, EC2, and cloud-native solutions"
    },
    {
      icon: Brain,
      title: "AI & Innovation",
      description: "Passionate about Gen AI and integrating cutting-edge technologies"
    }
  ]

  // Profile Image Component with your actual image
  const ProfileImage = () => {
    if (imageError) {
      // Fallback UI when image fails to load
      return (
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative z-10">
          <div className="text-center">
            <User className="w-16 h-16 text-white mb-2 mx-auto" />
            <div className="text-3xl font-bold text-white">RM</div>
          </div>
        </div>
      )
    }

    return (
      <img
        src={getImagePath("/images/RaviProfile.jpeg")}
        alt="Ravi Mishra - Full Stack Developer"
        className="w-full h-full rounded-xl object-cover relative z-10"
        onError={() => setImageError(true)}
        onLoad={() => setImageError(false)}
      />
    )
  }

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Profile Image Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="lg:sticky lg:top-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-4 sm:p-6 text-center hover-lift"
                >
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6">
                    <motion.div
                      whileHover={{ rotate: 5 }}
                      className="relative w-full h-full"
                    >
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                        <div className="w-full h-full rounded-xl bg-gray-900"></div>
                      </div>
                      <ProfileImage />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Ravi Mishra
                  </h3>
                  <p className="text-purple-400 font-medium mb-4 text-sm sm:text-base">
                    Full Stack Developer
                  </p>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-400">Experience</span>
                      <span className="text-white font-medium">6+ Years</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-400">Location</span>
                      <span className="text-white font-medium">Bangalore, India</span>
                    </div>
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="text-gray-400">Specialization</span>
                      <span className="text-white font-medium">Full Stack</span>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-700">
                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                      <span className="px-2 sm:px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs">
                        Problem Solver
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs">
                        Team Player
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-xs">
                        Continuous Learner
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="space-y-8">
                {/* About Text */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-2xl p-4 sm:p-6 lg:p-8 hover-lift"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                    Passionate Developer & Problem Solver
                  </h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    With 6 years of experience in full-stack development, I specialize in creating 
                    robust, scalable applications using modern technologies. My journey spans from 
                    backend systems with Java and Spring Boot to dynamic frontends with React and Next.js.
                  </p>
                  <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    I'm passionate about cloud technologies, particularly AWS, and have extensive 
                    experience with microservices, serverless architectures, and DevOps practices. 
                    Recently, I've been exploring the exciting world of Generative AI and its 
                    applications in modern software development.
                  </p>
                </motion.div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      className="glass rounded-xl p-4 sm:p-6 hover-lift"
                    >
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3 sm:mr-4">
                          <highlight.icon className="text-white" size={20} />
                        </div>
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {highlight.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">
                My Development Philosophy
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I believe in writing clean, maintainable code that not only solves today's problems 
                but is also adaptable for tomorrow's challenges. My approach combines technical 
                excellence with user-centric design, ensuring that every solution I create delivers 
                real value to both businesses and end-users.
              </p>
              
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">6+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">50+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">15+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-gray-400 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About