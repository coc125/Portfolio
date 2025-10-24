"use client"

import { useEffect, useRef, useState } from "react"

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with Next.js and Stripe integration",
      tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
      image: "/ecommerce-dashboard.png",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      tags: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
      image: "/task-management-app.png",
    },
    {
      id: 3,
      title: "Design System",
      description: "Comprehensive component library and design system documentation",
      tags: ["React", "Storybook", "TypeScript", "CSS"],
      image: "/design-system-components.png",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts and insights",
      tags: ["Next.js", "Recharts", "PostgreSQL", "Tailwind CSS"],
      image: "/analytics-dashboard-charts.png",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = Number.parseInt(entry.target.getAttribute("data-project-id") || "0")
            setVisibleProjects((prev) => [...new Set([...prev, projectId])])
          }
        })
      },
      { threshold: 0.1 },
    )

    const projectElements = document.querySelectorAll("[data-project-id]")
    projectElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`group bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-2 cursor-pointer ${
                visibleProjects.includes(project.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } transition-all duration-700`}
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 bg-primary/10 text-primary rounded-full transition-all duration-300 group-hover:bg-primary/20 ${
                        visibleProjects.includes(project.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      }`}
                      style={{
                        transitionDelay: visibleProjects.includes(project.id) ? `${100 + index * 50}ms` : "0ms",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
