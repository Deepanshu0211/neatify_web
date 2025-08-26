"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 smooth-transition ${
        isScrolled ? "glass-effect macbook-shadow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v-2z" />
                <path d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Neatify</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-zinc-400 hover:text-white transition-colors smooth-transition">
              Features
            </a>
            <a href="#screenshots" className="text-zinc-400 hover:text-white transition-colors smooth-transition">
              Screenshots
            </a>
            <a href="#download" className="text-zinc-400 hover:text-white transition-colors smooth-transition">
              Download
            </a>
             <a href="/privacy" className="text-zinc-400 hover:text-white transition-colors smooth-transition">
              Privacy
            </a>
          </div>

        <Button
          className="bg-white text-black hover:bg-zinc-200 transition-all duration-300 macbook-shadow"
          onClick={() => {
            document.getElementById("download")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Get Started
        </Button>
        
        </nav>
      </div>
    </header>
  )
}
