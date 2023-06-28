import { FrontFooter } from "@/components/layouts/front-footer"
import { FrontHeader } from "@/components/layouts/front-header"


interface FrontLayoutProps {
  children: React.ReactNode
}

export default async function FrontLayout({ children }: FrontLayoutProps) {

  return (
    <div className="relative flex min-h-screen flex-col">
      <FrontHeader/>
      <main className="flex-1">{children}</main>
      <FrontFooter />
    </div>
  )
}
