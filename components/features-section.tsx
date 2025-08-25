import { Card, CardContent } from "@/components/ui/card"
import { Zap, Brain, Shield, Sparkles, FolderOpen, Clock } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Organization",
    description:
      "Smart suggestions that learn from your habits and automatically categorize files with incredible accuracy.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Process thousands of files in seconds. Our optimized engine handles large directories without breaking a sweat.",
  },
  {
    icon: FolderOpen,
    title: "Smart Categories",
    description: "Intelligent file type detection and custom folder structures that make sense for your workflow.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your files never leave your device. All processing happens locally with optional backup integration.",
  },
  {
    icon: Clock,
    title: "Undo Anytime",
    description: "Made a mistake? Instantly revert any organization action with our comprehensive undo system.",
  },
  {
    icon: Sparkles,
    title: "Effortless Experience",
    description: "Beautiful, intuitive interface that makes file organization feel like magic, not work.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="features-section py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why choose <span className="gradient-text">Neatify</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to transform your digital chaos into organized perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="feature-card bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
