import { FrontFooter } from "@/components/layouts/front-footer"


interface FrontLayoutProps {
  children: React.ReactNode
}

export default async function FrontLayout({ children }: FrontLayoutProps) {

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* <SiteHeader user={user} /> */}
      <main className="flex-1">{children}</main>
      <FrontFooter />
    </div>
  )
}
