"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Apple, Monitor, Smartphone } from "lucide-react"

export function DownloadSection() {
  return (
    <section id="download" className="download-section py-24 bg-zinc-900/50">
      <div className="container mx-auto px-6">
        <div className="download-content max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 smooth-transition">
            Ready to get <span className="gradient-text">organized</span>?
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Join thousands of users who have transformed their digital workspace with Neatify.
          </p>

          <Card className="bg-zinc-800/50 border-zinc-700/50 mb-12 macbook-shadow">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Neatify 3.0.7 for Windows
                  </h3>
                  <p className="text-zinc-400">
                    Latest stable release with improved performance and new features.
                  </p>
                </div>

                {/* Direct download button */}
                <a href="/Neatify_3.0.7_x64-setup.exe" download>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-zinc-200 transition-all duration-300 group min-w-[200px] macbook-shadow"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    Download for Windows
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Windows */}
            <div className="flex items-center justify-center space-x-2 text-zinc-500">
              <Monitor className="w-5 h-5" />
              <span>Windows 10+</span>
            </div>

            {/* macOS (Coming Soon) */}
            <div className="flex items-center justify-center space-x-2 text-zinc-400 italic">
              <Apple className="w-5 h-5" />
              <span>macOS 10.15+ (Coming soon)</span>
            </div>

            {/* Linux (Coming Soon) */}
            <div className="flex items-center justify-center space-x-2 text-zinc-400 italic">
              <Smartphone className="w-5 h-5" />
              <span>Linux (Coming soon)</span>
            </div>
          </div>

          <div className="mt-8 text-sm text-zinc-600">
            <p>Free to download • No subscription required • Privacy-first</p>
          </div>
        </div>
      </div>
    </section>
  )
}
