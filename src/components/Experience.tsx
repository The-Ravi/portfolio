'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  // Helper function to get the correct image path for GitHub Pages
  const getImagePath = (path: string) => {
    // Add basePath for production deployment
    const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''
    return `${basePath}${path}`
  }

  const experiences = [
    {
      title: "Full Stack Software Developer",
      company: "Harman",
      logo: "/logos/harman-logo.svg",
      location: "Gurgaon, India",
      period: "2025 - present",
      description: "Started my professional journey in automotive software development. Worked on connected car solutions and infotainment systems. Gained experience in embedded systems and IoT technologies.",
      technologies: ["Java", "C++", "JavaScript", "HTML/CSS", "MySQL", "Git", "Linux", "IoT"],
      achievements: [
        "Contributed to connected car infotainment systems",
        "Developed IoT solutions for automotive applications",
        "Successfully completed 25+ client projects",
        "Learned agile development methodologies and automotive standards"
      ]
    },
    {
      title: "Software Engineer",
      company: "Accenture",
      logo: "/logos/accenture-logo.svg",
      location: "Bangalore, India",
      period: "2022 - Present",
      description: "Leading development of enterprise-scale applications using Java Spring Boot and React. Architected microservices on AWS, implemented CI/CD pipelines, and mentored junior developers. Working on digital transformation projects for Fortune 500 clients.",
      technologies: ["Java", "Spring Boot", "React", "AWS", "Docker", "Kubernetes", "Gen AI", "Microservices"],
      achievements: [
        "Led digital transformation projects for 3+ Fortune 500 clients",
        "Reduced application load time by 40% through optimization",
        "Implemented Gen AI solutions improving business efficiency by 30%",
        "Mentored 8+ junior developers and conducted technical interviews"
      ]
    },
    {
      title: "Full Stack Developer - II",
      company: "Newee",
      logo: "/logos/newee-logo.svg",
      location: "Bangalore",
      period: "2021 - 2022",
      description: "Developed innovative fintech solutions using modern web technologies. Built scalable payment processing systems and implemented real-time analytics dashboards for financial data.",
      technologies: ["Java", "Spring Boot", "React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      achievements: [
        "Built payment processing system handling 100k+ transactions daily",
        "Developed real-time analytics dashboard with 99.9% uptime",
        "Optimized database queries improving performance by 45%",
        "Integrated multiple payment gateways and financial APIs"
      ]
    },
    {
      title: "Software Developer",
      company: "BlacknGreen",
      logo: "/logos/blackngreen-logo.svg",
      location: "Gurgaon, India",
      period: "2020 - 2021",
      description: "Worked on e-commerce and sustainability-focused applications. Developed features for green technology platforms and implemented data analytics solutions for environmental impact tracking.",
      technologies: ["Java", "Spring MVC", "JavaScript", "React", "MySQL", "AWS EC2", "Docker"],
      achievements: [
        "Developed e-commerce platform serving 50k+ active users",
        "Built environmental impact tracking system",
        "Implemented automated testing reducing bugs by 60%",
        "Created RESTful APIs with comprehensive documentation"
      ]
    }
    
  ]

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              6 years of professional experience building scalable applications and leading development teams
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400"></div>

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 sm:left-8 md:left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 sm:border-4 border-black z-10"></div>

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'} ml-12 sm:ml-16 md:ml-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass rounded-2xl p-4 sm:p-6 hover-lift"
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3">
                          <Briefcase className="text-white" size={16} />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          {exp.logo && (
                            <div className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 bg-white rounded-full p-1 flex items-center justify-center">
                              <img
                                src={getImagePath(exp.logo)}
                                alt={`${exp.company} logo`}
                                width={20}
                                height={20}
                                className="object-contain"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                            </div>
                          )}
                          <h4 className="text-base sm:text-lg font-semibold text-white">
                            {exp.company}
                          </h4>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-400 text-xs sm:text-sm">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="text-white font-semibold mb-2 text-sm sm:text-base">Key Achievements:</h5>
                        <ul className="text-gray-300 text-xs sm:text-sm space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-purple-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Career Highlights
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">6+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-gray-300">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience