import AdminSidebar from "@/components/layouts/admin-sidebar"
import { ThemeToggle } from "@/components/layouts/theme-toggle"

interface AdminLayoutProps {
    children: React.ReactNode
}
export default async function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <div className="flex dark:bg-slate-600">
            <AdminSidebar />
            <div className="container px-4 py-4">
                {children}
                <ThemeToggle />
            </div>
        </div>
    )
}
