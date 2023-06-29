import AdminSidebar from "@/components/layouts/admin-sidebar"

interface AdminLayoutProps {
    children: React.ReactNode
}
export default async function AdminLayout({ children }: AdminLayoutProps) {

    return (
        <div className="flex">
            <AdminSidebar />
            <div className="w-3/10">
                {children}
            </div>

        </div>
    )
}
