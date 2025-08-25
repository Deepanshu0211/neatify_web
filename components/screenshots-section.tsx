export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="screenshots-section py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See <span className="gradient-text">Neatify</span> in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the beautiful interface that makes file organization a joy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="screenshot-item">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-W2L1MvBKiiUFSRezoYt6oiJbfL4Ovr.png"
                alt="Neatify Welcome Screen"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-lg font-semibold mb-2">Welcome Experience</h3>
                  <p className="text-sm text-muted-foreground">Clean, intuitive onboarding</p>
                </div>
              </div>
            </div>
          </div>

          <div className="screenshot-item">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IB33Vku7k18Kd9OMxhmxTKLVAi6Aga.png"
                alt="Neatify Main Interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-lg font-semibold mb-2">Organization Interface</h3>
                  <p className="text-sm text-muted-foreground">Powerful tools, simple design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
