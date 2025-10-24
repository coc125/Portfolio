export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">© {currentYear} My Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm hover:opacity-80 transition-opacity">
              Privacy
            </a>
            <a href="#" className="text-sm hover:opacity-80 transition-opacity">
              Terms
            </a>
            <a href="#" className="text-sm hover:opacity-80 transition-opacity">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
