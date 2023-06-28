import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Metadata } from 'next/types'


export const metadata: Metadata = 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <TailwindIndicator />
        </ThemeProvider>
        </body>
    </html>
  )
}
