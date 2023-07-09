"use client"
import { Category } from "@prisma/client"
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";
import { deleteCategoryAction } from "@/app/_actions/category";
import { Skeleton } from "./ui/skeleton";
import { TableCell, TableHead,Table, TableRow } from "./ui/table";
interface CategoryTableProps {
    categories: Category[]
}
export const CategoryTable = ({ categories }: CategoryTableProps) => {
    const [isPending, startTransition] = useTransition();
    const deleteCategory = (id: number) => {
        startTransition(async () => {
            await deleteCategoryAction(id);
            toast.success("Category deleted");
        })
    }
    return <Table>
        <thead className="[&_tr]:border-b">
            <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
            {
                isPending ? <Skeleton className="h-6 w-20" /> : categories.map((category) => <TableRow key={category.id}>
                    <TableCell>
                        {category.name}
                    </TableCell>
                    <TableCell>
                        <Button
                            variant={"outline"}
                            onClick={() => deleteCategory(category.id)}
                        >
                            Delete
                        </Button>
                    </TableCell>
                </TableRow>)
            }
        </tbody>
    </Table>
}