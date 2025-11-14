'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@vyomgarud.com",
      link: "mailto:contact@vyomgarud.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 1800-VYOM-UAV",
      link: "tel:+918001800828"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: "Defense Technology Park, Bangalore, India",
      link: null
    }
  ]

  return (
    <section className="section-padding bg-charcoal-950" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-charcoal-300 max-w-3xl mx-auto">
            Ready to discuss your UAV requirements? Our technical team is standing by 
            to provide expert consultation and mission-specific solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="card">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-charcoal-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-charcoal-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-charcoal-400"
                    placeholder="Your organization/company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-charcoal-800 border border-charcoal-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-charcoal-400 resize-none"
                    placeholder="Tell us about your project requirements, mission objectives, or any specific questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  const Content = (
                    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-charcoal-900/50 transition-colors duration-300">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                        <p className="text-charcoal-300">{info.details}</p>
                      </div>
                    </div>
                  )
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      {info.link ? (
                        <a href={info.link} className="block hover:scale-[1.02] transition-transform duration-300">
                          {Content}
                        </a>
                      ) : (
                        Content
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="card">
              <h4 className="font-semibold text-white mb-4">Business Hours</h4>
              <div className="space-y-2 text-charcoal-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency Support Only</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-charcoal-700">
                <p className="text-sm text-charcoal-400">
                  For urgent mission-critical support, our 24/7 emergency line is available at 
                  <span className="text-primary"> +91 1800-EMERGENCY</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}