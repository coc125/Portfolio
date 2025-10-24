"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Creative Developer & Designer
        </h1>
        <p
          className={`text-xl sm:text-2xl text-foreground/70 text-balance transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Crafting beautiful, functional digital experiences with modern web technologies
        </p>
        <div
          className={`flex gap-4 justify-center pt-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 hover:scale-105 transition-all font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 hover:scale-105 transition-all font-medium"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
