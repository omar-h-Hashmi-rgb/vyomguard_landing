'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full animate-ping delay-700"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,123,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,123,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center mb-6">
              <div className="w-8 h-8 border-2 border-white rounded-sm transform rotate-45"></div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-6xl md:text-8xl font-bold tracking-tight"
          >
            <span className="text-white">Vyom</span>
            <span className="text-primary">Garud</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-charcoal-300 max-w-3xl mx-auto leading-relaxed"
          >
            Military-grade UAV systems engineered for 
            <span className="text-primary font-semibold"> precision</span>, 
            <span className="text-primary font-semibold"> reliability</span>, and 
            <span className="text-primary font-semibold"> advanced autonomy</span>
          </motion.p>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-charcoal-400 text-lg max-w-2xl mx-auto"
          >
            Next-generation drone technology for defense, surveillance, and critical mission operations
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <button className="btn-primary text-lg px-8 py-4">
              Explore Capabilities
            </button>
            <button className="btn-secondary text-lg px-8 py-4 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-charcoal-800"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-charcoal-400">Mission Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-charcoal-400">Countries Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-charcoal-400">Operational Support</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-charcoal-400 animate-bounce" />
      </motion.div>
    </section>
  )
}