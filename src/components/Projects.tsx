'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Code, Database, Cloud } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "A scalable e-commerce platform built with microservices architecture using Spring Boot, React, and AWS. Features include user management, product catalog, order processing, and payment integration.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "React", "AWS", "Docker", "Redis", "PostgreSQL"],
      features: [
        "Microservices architecture with API Gateway",
        "Real-time inventory management",
        "Secure payment processing",
        "Admin dashboard with analytics"
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full Stack"
    },
    {
      title: "AI-Powered Content Management System",
      description: "A modern CMS with AI-powered content generation and optimization features. Built with Next.js, Node.js, and integrated with OpenAI APIs for intelligent content suggestions.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Node.js", "OpenAI API", "MongoDB", "AWS Lambda", "TypeScript"],
      features: [
        "AI content generation and optimization",
        "Real-time collaborative editing",
        "SEO optimization suggestions",
        "Multi-language support"
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "AI/ML"
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "A comprehensive analytics dashboard for monitoring application performance and user behavior. Features real-time data visualization, custom metrics, and automated reporting.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "D3.js", "Node.js", "Kafka", "InfluxDB", "AWS EC2"],
      features: [
        "Real-time data streaming with Kafka",
        "Interactive data visualizations",
        "Custom dashboard builder",
        "Automated alert system"
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Data Analytics"
    },
    {
      title: "Serverless Task Management API",
      description: "A highly scalable task management API built with serverless architecture using AWS Lambda, API Gateway, and DynamoDB. Features include user authentication, task scheduling, and team collaboration.",
      image: "/api/placeholder/600/400",
      technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "Node.js", "JWT", "CloudFormation"],
      features: [
        "Serverless architecture for cost efficiency",
        "JWT-based authentication",
        "Real-time notifications",
        "Team collaboration features"
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Cloud/Serverless"
    },
    {
      title: "Social Media Analytics Tool",
      description: "A comprehensive social media analytics platform that aggregates data from multiple platforms, provides insights, and generates automated reports for marketing teams.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "React", "Redis", "PostgreSQL", "Docker"],
      features: [
        "Multi-platform data aggregation",
        "Advanced analytics and insights",
        "Automated report generation",
        "Custom dashboard creation"
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Analytics"
    },
    {
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain technology. Features include voter authentication, ballot encryption, and real-time result tracking with complete audit trails.",
      image: "/api/placeholder/600/400",
      technologies: ["Solidity", "Web3.js", "React", "Node.js", "IPFS", "MetaMask"],
      features: [
        "Blockchain-based security",
        "Anonymous voting with verification",
        "Real-time result tracking",
        "Complete audit trail"
      ],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Blockchain"
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work demonstrating expertise across different technologies and domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden hover-lift group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Code className="text-white/80 mx-auto mb-2" size={48} />
                      <span className="text-white/60 text-sm">{project.category}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/30 text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-xs sm:text-sm">Key Features:</h4>
                    <ul className="text-gray-400 text-xs space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded text-xs border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      >
                        <Github className="text-white" size={16} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
                      >
                        <ExternalLink className="text-white" size={16} />
                      </motion.a>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs sm:text-sm rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 w-full sm:w-auto"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                More Projects Coming Soon
              </h3>
              <p className="text-gray-300 mb-6">
                I'm constantly working on new projects and exploring emerging technologies. 
                Check back regularly for updates or connect with me to discuss potential collaborations.
              </p>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Github className="mr-2" size={20} />
                View All Projects on GitHub
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects