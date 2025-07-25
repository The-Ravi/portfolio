'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // EmailJS Configuration - Replace these with your actual credentials
  const EMAILJS_SERVICE_ID = 'service_0blrngq'  // Replace with your service ID
  const EMAILJS_TEMPLATE_ID = 'template_qjwapmc' // Replace with your template ID  
  const EMAILJS_PUBLIC_KEY = 'wWfeTGUB0Oq7H7lai'  // Replace with your public key

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    // Basic validation
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorMessage('EmailJS configuration is missing')
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      )

      console.log('Email sent successfully:', result.text)
      setSubmitStatus('success')
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
    } catch (error: any) {
      console.error('Email send failed:', error)
      
      // Handle specific EmailJS errors
      if (error.text) {
        setErrorMessage(`EmailJS Error: ${error.text}`)
      } else if (error.message) {
        setErrorMessage(`Error: ${error.message}`)
      } else {
        setErrorMessage('Failed to send message. Please check your EmailJS configuration.')
      }
      
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      
      // Reset status after 8 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setErrorMessage('')
      }, 8000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ravimishra1997@gmail.com",
      link: "mailto:ravimishra1997@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9599661059",
      link: "tel:+9599661059"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gurgaon, India",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ravimishra97/",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-300"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:ravimishra1997@gmail.com",
      color: "hover:text-purple-400"
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
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Let's Connect
                </h3>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{info.title}</h4>
                        <p className="text-gray-300">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-8">
                  <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 bg-white/5 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10`}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                  <h4 className="text-white font-semibold mb-2">Available for</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm">
                      Full-time roles
                    </span>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                      Freelance projects
                    </span>
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                      Consulting
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Send a Message
                </h3>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-600/20 border border-green-500/30 rounded-lg flex items-center"
                  >
                    <CheckCircle className="text-green-400 mr-3 flex-shrink-0" size={20} />
                    <span className="text-green-300 text-sm">
                      Message sent successfully! I'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-red-600/20 border border-red-500/30 rounded-lg"
                  >
                    <div className="flex items-start">
                      <AlertCircle className="text-red-400 mr-3 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <span className="text-red-300 text-sm block">
                          {errorMessage || 'Failed to send message. Please try again or contact me directly.'}
                        </span>
                        <span className="text-red-400 text-xs mt-1 block">
                          Visit <a href="https://dashboard.emailjs.com/admin/account" target="_blank" rel="noopener noreferrer" className="underline">EmailJS Dashboard</a> to get your credentials.
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative"
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-8 p-4 bg-blue-600/20 rounded-lg border border-blue-500/30">
                  <p className="text-blue-300 text-sm text-center">
                    💡 Tip: Include details about your project or opportunity for a faster response!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-gray-300 mb-6">
                Whether you have a project in mind, need technical consultation, or just want to connect, 
                I'm always excited to hear from fellow developers and potential collaborators.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full border border-green-500/30">
                  ✅ Quick Response Time
                </span>
                <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full border border-blue-500/30">
                  ✅ Free Initial Consultation
                </span>
                <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/30">
                  ✅ Flexible Collaboration
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact