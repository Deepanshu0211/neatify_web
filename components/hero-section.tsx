"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden parallax-container">
      <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-zinc-800"></div>

      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/5 animate-float parallax-element"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 rounded-full bg-zinc-400/10 animate-float parallax-element"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-zinc-300/10 animate-float parallax-element"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight smooth-transition">
            Organize your <span className="gradient-text">digital mess</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto smooth-transition">
            Clean. Fast. Effortless. Transform chaos into order with AI-powered file organization.
          </p>

          <div className="hero-cta flex justify-center items-center">
            <a href="/Neatify_3.0.7_x64-setup.exe" download>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-zinc-200 transition-all duration-300 group macbook-shadow"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download for Windows
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          <div className="mt-12 text-sm text-zinc-500">
            <p>
              Available for <span className="text-white">Windows</span> • 
              <span className="italic text-zinc-400"> macOS (Coming soon)</span> • 
              <span className="italic text-zinc-400"> Linux (Coming soon)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
