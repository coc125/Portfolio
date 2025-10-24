export function About() {
  const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Web Design", "UI/UX"]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate developer and designer focused on creating accessible, pixel-perfect digital experiences.
              With expertise in modern web technologies, I blend thoughtful design with robust engineering.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I specialize in building responsive web applications that not only look great but perform exceptionally
              well. My work spans from concept to deployment, ensuring every detail is carefully considered.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
