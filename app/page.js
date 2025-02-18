"use client"

import { Github, Linkedin, Twitter, FileText } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-[200px] font-bold text-foreground font-orbitron">SK</div>
      <div className="flex flex-col items-center space-y-6 mt-8">
        <div className="flex space-x-6">
          <Link
            href="https://linkedin.com/in/samkadouh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/samkaddouh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://x.com/samkadouh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            <Twitter size={24} />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
        <Link
          href="/sam-kadouh-cv.pdf"
          download
          className="flex items-center space-x-2 text-foreground hover:text-muted-foreground transition-colors"
        >
          <FileText size={20} />
          <span>View CV</span>
        </Link>
      </div>
    </div>
  )
}

