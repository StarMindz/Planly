'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 opacity-80" />
        <motion.div
          className="absolute inset-0 opacity-50"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            backgroundSize: ['100% 100%', '200% 200%'],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          style={{
            backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
            backgroundSize: '100% 100%',
          }}
        />
      </div>
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Plan Smarter with AI
        </motion.h1>
        <motion.p
          className="text-xl text-white mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Revolutionize your planning process with Planly. Harness the power of AI to create, organize, and optimize your projects effortlessly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="bg-[#661a5d] text-white hover:bg-[#4D0745] hover:text-white transition-colors">
            Get Started
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
    </section>
  )
}

