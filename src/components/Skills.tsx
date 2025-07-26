'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Java", level: 95, color: "from-orange-400 to-red-500" },
        { name: "Spring Boot", level: 90, color: "from-green-400 to-green-600" },
        { name: "Spring MVC", level: 85, color: "from-green-300 to-green-500" },
        { name: "Node.js", level: 80, color: "from-green-500 to-green-700" },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", level: 85, color: "from-gray-700 to-black" },
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700" },
      ]
    },
    {
      title: "Database & Storage",
      skills: [
        { name: "SQL", level: 90, color: "from-blue-500 to-purple-600" },
        { name: "Redis", level: 75, color: "from-red-500 to-red-700" },
        { name: "MongoDB", level: 70, color: "from-green-500 to-green-700" },
        { name: "PostgreSQL", level: 80, color: "from-blue-600 to-indigo-600" },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "Lambda", level: 80, color: "from-orange-500 to-yellow-500" },
        { name: "EC2", level: 85, color: "from-orange-600 to-red-500" },
        { name: "Linux", level: 80, color: "from-gray-600 to-gray-800" },
      ]
    },
    {
      title: "Emerging Technologies",
      skills: [
        { name: "Gen AI", level: 75, color: "from-purple-400 to-pink-500" },
        { name: "Kafka", level: 70, color: "from-gray-700 to-gray-900" },
        { name: "Microservices", level: 85, color: "from-indigo-500 to-purple-600" },
        { name: "Docker", level: 75, color: "from-blue-500 to-blue-700" },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across different domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-2xl p-4 sm:p-6 hover-lift"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium text-sm sm:text-base">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-xs sm:text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 
                          }}
                          className={`h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 sm:mt-16">
            <div className="glass rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Technology evolves rapidly, and I'm committed to staying current with the latest 
                trends and best practices in software development.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <span className="px-3 sm:px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30 text-xs sm:text-sm">
                  Currently Exploring: AI/ML
                </span>
                <span className="px-3 sm:px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30 text-xs sm:text-sm">
                  Next: Kubernetes
                </span>
                <span className="px-3 sm:px-4 py-2 bg-green-600/20 text-green-300 rounded-full border border-green-500/30 text-xs sm:text-sm">
                  Interest: Blockchain
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills