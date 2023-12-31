import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Metadata } from 'next/types'
import { siteMetaData } from '@/lib/seo/meta-data'
import { Toaster } from '@/components/ui/toaster'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata =siteMetaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <TailwindIndicator />
        </ThemeProvider>
        <Toaster />
        </body>
    </html>
  )
}
