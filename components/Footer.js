'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Contact", href: "#contact" },
    { name: "Support", href: "#support" }
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Export Control", href: "#" },
    { name: "Compliance", href: "#" }
  ]

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white rounded-sm transform rotate-45"></div>
                </div>
                <span className="text-2xl font-display font-bold">
                  <span className="text-white">Vyom</span>
                  <span className="text-primary">Garud</span>
                </span>
              </div>
              
              <p className="text-charcoal-300 mb-6 max-w-md leading-relaxed">
                Advanced UAV systems engineered for military-grade performance, 
                precision operations, and mission-critical reliability in the most 
                demanding environments.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-charcoal-400">
                  <Mail className="w-4 h-4" />
                  <span>contact@vyomgarud.com</span>
                </div>
                <div className="flex items-center space-x-3 text-charcoal-400">
                  <Phone className="w-4 h-4" />
                  <span>+91 1800-VYOM-UAV</span>
                </div>
                <div className="flex items-center space-x-3 text-charcoal-400">
                  <MapPin className="w-4 h-4" />
                  <span>Defense Technology Park, Bangalore, India</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-charcoal-400 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal & Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-white font-semibold mb-6">Legal & Compliance</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-charcoal-400 hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-charcoal-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-charcoal-400 text-sm"
            >
              © 2024 VyomGarud. All rights reserved. | Defense-grade UAV systems.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-charcoal-800 rounded-lg flex items-center justify-center text-charcoal-400 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </motion.div>
          </div>

          {/* Additional Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 pt-4 border-t border-charcoal-900"
          >
            <p className="text-xs text-charcoal-500 text-center max-w-4xl mx-auto">
              <strong>NOTICE:</strong> VyomGarud products are designed for military, defense, and authorized civilian applications. 
              Export and use of our UAV systems are subject to applicable international laws and regulations. 
              Please consult with our compliance team for specific requirements in your jurisdiction.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}