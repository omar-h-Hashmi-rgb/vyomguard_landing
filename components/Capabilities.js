'use client'

import { motion } from 'framer-motion'
import { Eye, Shield, Radio, Cpu } from 'lucide-react'

export default function Capabilities() {
  const capabilities = [
    {
      icon: Eye,
      title: "Surveillance & Reconnaissance",
      description: "Advanced optical and thermal imaging systems with real-time intelligence gathering capabilities for comprehensive battlefield awareness.",
      features: ["4K Thermal Imaging", "Night Vision", "Object Tracking", "Live Streaming"]
    },
    {
      icon: Shield,
      title: "Tactical Defense Systems",
      description: "Military-grade defensive platforms equipped with countermeasure systems and electronic warfare capabilities for critical mission protection.",
      features: ["EW Capabilities", "Jamming Resistant", "Stealth Mode", "Armor Plating"]
    },
    {
      icon: Radio,
      title: "Communication Networks",
      description: "Secure, encrypted communication relay systems enabling seamless coordination across distributed operational environments.",
      features: ["Encrypted Comms", "Mesh Networking", "Satellite Link", "Emergency Beacon"]
    },
    {
      icon: Cpu,
      title: "AI-Powered Autonomy",
      description: "Next-generation artificial intelligence enabling autonomous decision-making, route optimization, and adaptive mission execution.",
      features: ["Machine Learning", "Auto Navigation", "Threat Detection", "Mission Planning"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section className="section-padding bg-charcoal-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Advanced <span className="text-primary">Capabilities</span>
          </h2>
          <p className="text-xl text-charcoal-300 max-w-3xl mx-auto">
            Our comprehensive suite of drone technologies delivers unmatched performance 
            across diverse operational scenarios
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="card group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                      {capability.title}
                    </h3>
                    <p className="text-charcoal-300 mb-4 leading-relaxed">
                      {capability.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {capability.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-charcoal-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Technical Specs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-charcoal-900/50 to-charcoal-800/50 rounded-2xl p-8 border border-charcoal-700/50"
        >
          <h3 className="text-2xl font-display font-bold mb-8 text-center">
            Technical Specifications
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50KM</div>
              <div className="text-charcoal-400">Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">12H</div>
              <div className="text-charcoal-400">Flight Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15KG</div>
              <div className="text-charcoal-400">Payload</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">-40°C</div>
              <div className="text-charcoal-400">Operating Temp</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}