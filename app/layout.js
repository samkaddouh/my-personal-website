import { MainNavbar } from "./components/MainNavbar"
import { Footer } from "./components/footer"
import { ThemeProvider } from "./components/theme-provider"
import { Orbitron } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from '@vercel/speed-insights/next'


const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
  display: "swap",
})

export const metadata = {
  title: "Sam",
  description: "Portfolio of Sam Kadouh",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${orbitron.variable} bg-background text-foreground min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainNavbar />
          <main className="flex-grow">{children}
          <Analytics />
          <SpeedInsights />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

