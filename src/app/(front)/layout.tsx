import { FrontFooter } from "@/components/layouts/front-footer"
import { FrontHeader } from "@/components/layouts/front-header"
import { db } from "@/lib/db"


interface FrontLayoutProps {
  children: React.ReactNode
}

export default async function FrontLayout({ children }: FrontLayoutProps) {
  const categories = await db.category.findMany({
    where: {
      parent_id: null
    },
    include: {
      childs: true
    }
  })

  return (
    <div className="relative flex min-h-screen flex-col">
      <FrontHeader categories={categories} />
      <main className="flex-1">{children}</main>
      <FrontFooter />
    </div>
  )
}
