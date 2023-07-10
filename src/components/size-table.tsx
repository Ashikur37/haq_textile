"use client"
import { Size } from "@prisma/client"
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";
import { deleteSizeAction } from "@/app/_actions/size";
import { Skeleton } from "./ui/skeleton";
import { TableCell, TableHead, Table, TableRow } from "./ui/table";
interface SizeTableProps {
    sizes: Size[]
}
export const SizeTable = ({ sizes }: SizeTableProps) => {
    const [isPending, startTransition] = useTransition();
    const deleteSize = (id: number) => {
        startTransition(async () => {
            await deleteSizeAction(id);
            toast.success("Size deleted");
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
                isPending ? <Skeleton className="h-6 w-20" /> : sizes.map((Size) => <TableRow key={Size.id}>
                    <TableCell>
                        {Size.name}
                    </TableCell>
                    <TableCell>
                        <Button
                            variant={"outline"}
                            onClick={() => deleteSize(Size.id)}
                        >
                            Delete
                        </Button>
                    </TableCell>
                </TableRow>)
            }
        </tbody>
    </Table>
}