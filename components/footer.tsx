export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v-2z" />
                  <path d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
                </svg>
              </div>
              <span className="text-xl font-bold gradient-text">Neatify</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Transform your digital chaos into organized perfection with AI-powered file organization.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#screenshots" className="hover:text-foreground transition-colors">
                  Screenshots
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-foreground transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="https://github.com/Deepanshu0211/Neatify" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Deepanshu0211/Neatify/issues"
                  className="hover:text-foreground transition-colors"
                >
                  Report Issues
                </a>
              </li>
              <li>
           
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Neatify. Made with ❤️ for organized minds.</p>
        </div>
      </div>
    </footer>
  )
}
