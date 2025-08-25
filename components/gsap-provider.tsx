"use client"

import type React from "react"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 100, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out", delay: 0.3 },
    )

    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out", delay: 0.6 },
    )

    gsap.fromTo(
      ".hero-cta",
      { opacity: 0, scale: 0.8, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.2)", delay: 0.9 },
    )

    gsap.to(".parallax-element", {
      y: (i, target: HTMLElement) =>
        -ScrollTrigger.maxScroll(window) * Number(target.dataset.speed || 0.2),
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })

    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 80, scale: 0.9, rotationX: 15 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.fromTo(
      ".screenshot-item",
      { opacity: 0, x: -100, rotation: -5, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".screenshots-section",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.fromTo(
      ".download-content",
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".download-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.to(".parallax-bg", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    })

    gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0.8, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          },
        },
      )
    })
  }, [])

  return <>{children}</>
}
