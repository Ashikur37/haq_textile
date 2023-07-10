"use client"
import { Color } from "@prisma/client"
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";
import { deleteColorAction } from "@/app/_actions/color";
import { Skeleton } from "./ui/skeleton";
import { TableCell, TableHead, Table, TableRow } from "./ui/table";
import { cn } from "@/lib/utils";
interface ColorTableProps {
    colors: Color[]
}
export const ColorTable = ({ colors }: ColorTableProps) => {
    const [isPending, startTransition] = useTransition();
    const deleteColor = (id: number) => {
        startTransition(async () => {
            await deleteColorAction(id);
            toast.success("Color deleted");
        })
    }
    return <Table>
        <thead className="[&_tr]:border-b">
            <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Color</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
            {
                isPending ? <Skeleton className="h-6 w-20" /> : colors.map((color) => <TableRow key={color.id}>
                    <TableCell>
                        {color.name}
                    </TableCell>
                    <TableCell>
                        <div className={"h-5 w-5 rounded-full"} style={{ backgroundColor: color.code }}></div>
                    </TableCell>
                    <TableCell>
                        <Button
                            variant={"outline"}
                            onClick={() => deleteColor(color.id)}
                        >
                            Delete
                        </Button>
                    </TableCell>
                </TableRow>)
            }
        </tbody>
    </Table>
}