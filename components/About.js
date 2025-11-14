'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Zap } from 'lucide-react'

export default function About() {
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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section className="relative bg-charcoal-900/30 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-display font-bold mb-6"
              >
                Pioneering the Future of 
                <span className="text-primary block">Aerial Defense</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-charcoal-300 leading-relaxed mb-6"
              >
                VyomGarud stands at the forefront of unmanned aerial vehicle technology, 
                delivering cutting-edge drone systems that redefine mission capabilities. 
                Our military-grade platforms combine advanced AI, precision engineering, 
                and battle-tested reliability.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="text-charcoal-400 leading-relaxed"
              >
                From reconnaissance and surveillance to tactical operations and critical 
                infrastructure protection, our autonomous systems provide unmatched 
                performance in the most demanding environments.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">Defense</div>
                <div className="text-sm text-charcoal-400">Grade Security</div>
              </div>
              
              <div className="text-center p-4">
                <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">Precision</div>
                <div className="text-sm text-charcoal-400">Engineering</div>
              </div>
              
              <div className="text-center p-4">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">Advanced</div>
                <div className="text-sm text-charcoal-400">Autonomy</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative bg-gradient-to-br from-charcoal-800 to-charcoal-900 rounded-2xl p-8 border border-charcoal-700">
              {/* Simulated Drone Interface */}
              <div className="bg-charcoal-950 rounded-lg p-6 border border-primary/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-primary font-mono text-sm">SYSTEM STATUS</div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-charcoal-400 text-sm">Flight Mode</span>
                    <span className="text-white text-sm font-mono">AUTONOMOUS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-400 text-sm">Altitude</span>
                    <span className="text-primary text-sm font-mono">2,500 FT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-400 text-sm">Battery</span>
                    <span className="text-green-400 text-sm font-mono">87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-400 text-sm">Signal</span>
                    <span className="text-white text-sm font-mono">STRONG</span>
                  </div>
                </div>
                
                <div className="mt-6 h-20 bg-charcoal-800 rounded border border-charcoal-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent animate-pulse"></div>
                  <div className="absolute top-2 left-2 text-xs text-charcoal-500">RADAR SWEEP</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary rounded-full animate-float"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}