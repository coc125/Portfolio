"use client"

import type React from "react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setErrors({})

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center text-balance">Get In Touch</h2>

        {submitted && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-700 dark:text-green-400 animate-in fade-in slide-in-from-top-2 duration-300">
            Thank you! Your message has been sent successfully. I'll get back to you soon!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value })
                if (errors.name) setErrors({ ...errors, name: "" })
              }}
              className={`w-full px-4 py-2 bg-muted border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all ${
                errors.name ? "border-red-500 focus:ring-red-500" : "border-border"
              }`}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
                if (errors.email) setErrors({ ...errors, email: "" })
              }}
              className={`w-full px-4 py-2 bg-muted border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground transition-all ${
                errors.email ? "border-red-500 focus:ring-red-500" : "border-border"
              }`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value })
                if (errors.message) setErrors({ ...errors, message: "" })
              }}
              rows={5}
              className={`w-full px-4 py-2 bg-muted border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none transition-all ${
                errors.message ? "border-red-500 focus:ring-red-500" : "border-border"
              }`}
              required
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-50 transition-all font-medium hover:scale-105 active:scale-95"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="mt-12 pt-12 border-t border-border text-center space-y-4">
          <p className="text-foreground/70">Or reach out directly:</p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:hello@example.com"
              className="text-primary hover:underline hover:text-primary/80 transition-colors"
            >
              Email
            </a>
            <a href="#" className="text-primary hover:underline hover:text-primary/80 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-primary hover:underline hover:text-primary/80 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
