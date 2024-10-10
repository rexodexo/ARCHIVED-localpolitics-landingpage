'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Vote, MessageSquare, BarChart2, Users, FileText, AlertCircle, ChevronRight, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "@/hooks/use-toast"

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Card className="bg-white dark:bg-gray-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

export function LandingPageComponent() {
  const [email, setEmail] = useState("")

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Signing up with email:", email)
    toast({
      title: "Thanks for signing up!",
      description: "We@apos;ll keep you updated on our launch.",
    })
    setEmail("")
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-purple-900">
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border-b border-gray-200 dark:border-gray-700">
        <Link className="flex items-center justify-center" href="#">
          <Vote className="h-6 w-6 mr-2 text-purple-600 dark:text-purple-400" />
          <span className="font-bold text-lg text-gray-800 dark:text-white">Local Politics</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Your Voice, Your City
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300">
                  Empowering the next generation to shape local politics. Discuss, vote, and drive change in your community.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-x-4"
              >
                <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Started
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-100">Learn More</Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={MessageSquare}
                title="Discussion Forums"
                description="Engage in meaningful debates about local issues that affect your community."
              />
              <FeatureCard
                icon={Vote}
                title="Voting System"
                description="Cast your vote on local matters and see real-time results."
              />
              <FeatureCard
                icon={BarChart2}
                title="Opinion Polls"
                description="Participate in polls and surveys to share your views on current issues."
              />
              <FeatureCard
                icon={FileText}
                title="Legislation Summaries"
                description="Get clear, concise summaries of important local propositions and bills."
              />
              <FeatureCard
                icon={Users}
                title="Candidate Profiles"
                description="Learn about local politicians, their history, and their policy positions."
              />
              <FeatureCard
                icon={AlertCircle}
                title="Stay Informed"
                description="Receive updates on local political events, meetings, and important dates."
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Local Politics</h2>
                <p className="mx-auto max-w-[700px] text-purple-100 md:text-xl">
                  Local Politics is a platform designed to bridge the gap between young citizens and their local government. We believe that by providing easy access to information, fostering discussion, and simplifying the voting process, we can encourage greater civic engagement among the younger generation.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button className="bg-white text-purple-600 hover:bg-purple-100">
                  Learn More About Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="signup" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white">Be the First to Know</h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl dark:text-gray-300">
                  Sign up now to receive updates about our platform launch and early access opportunities.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-sm space-y-2"
              >
                <form onSubmit={handleSignUp} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Sign Up
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white">Get in Touch</h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl dark:text-gray-300">
                  Have questions or suggestions? We@apos;d love to hear from you. Reach out to us for more information.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Contact Us
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-300 dark:border-gray-700">
        <p className="text-xs text-gray-600 dark:text-gray-400">© 2024 Local Politics. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600 dark:text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600 dark:text-gray-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}