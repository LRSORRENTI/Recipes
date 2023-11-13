import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'
import { ModeToggle } from '@/components/mode-toggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <nav>
          <ModeToggle></ModeToggle>
          <h1 className='flex justify-center'>
            Tasty Recipes
          </h1>
        </nav>
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
