'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Globe } from 'lucide-react'

export default function Highlights() {
  const highlights = [
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Quick-launch systems ready for immediate mission deployment within minutes"
    },
    {
      icon: Shield,
      title: "Military Hardened",
      description: "Battle-tested durability with encryption and secure communication protocols"
    },
    {
      icon: Globe,
      title: "Global Operations",
      description: "All-weather, all-terrain capabilities for worldwide mission success"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-charcoal-900 via-charcoal-900/50 to-charcoal-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Why Choose <span className="text-primary">VyomGarud</span>
          </h2>
          <p className="text-xl text-charcoal-300 max-w-3xl mx-auto">
            Uncompromising excellence in every aspect of drone technology and mission execution
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="card h-full flex flex-col items-center text-center p-8 group-hover:bg-charcoal-800/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-display font-semibold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-charcoal-300 leading-relaxed flex-1">
                    {highlight.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-display font-bold mb-4">
              Ready to Deploy Advanced UAV Solutions?
            </h3>
            <p className="text-charcoal-300 mb-6 max-w-2xl mx-auto">
              Contact our technical team to discuss your mission requirements and discover 
              how VyomGarud can enhance your operational capabilities.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}