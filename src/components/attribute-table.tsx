"use client"
import { Attribute } from "@prisma/client"
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner";
import { deleteAttributeAction } from "@/app/_actions/attribute";
import { Skeleton } from "./ui/skeleton";
import { TableCell, TableHead, Table, TableRow } from "./ui/table";
import { cn } from "@/lib/utils";
interface AttributeTableProps {
    attributes: Attribute[]
}
export const AttributeTable = ({ attributes }: AttributeTableProps) => {
    const [isPending, startTransition] = useTransition();
    const deleteAttribute = (id: number) => {
        startTransition(async () => {
            await deleteAttributeAction(id);
            toast.success("Attribute deleted");
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
                isPending ? <Skeleton className="h-6 w-20" /> : attributes.map((attribute) => <TableRow key={attribute.id}>
                    <TableCell>
                        {attribute.name}
                    </TableCell>
                    <TableCell>
                        <Button
                            variant={"outline"}
                            onClick={() => deleteAttribute(attribute.id)}
                        >
                            Delete
                        </Button>
                    </TableCell>
                </TableRow>)
            }
        </tbody>
    </Table>
}