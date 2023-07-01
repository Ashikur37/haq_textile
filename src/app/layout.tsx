import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Metadata } from 'next/types'
import { siteMetaData } from '@/lib/seo/meta-data'
import { Toaster } from '@/components/ui/toaster'


export const metadata: Metadata =siteMetaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <TailwindIndicator />
        </ThemeProvider>
        <Toaster />
        </body>
    </html>
  )
}
