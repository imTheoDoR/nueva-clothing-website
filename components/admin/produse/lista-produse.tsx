"use client";

import deleteProduct from "@/actions/admin/produse/delete";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { EllipsisVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  produse: {
    id: string;
    name: string;
    model: string;
    raft: string;
    gender: string;
    category: string;
  }[];
}

const ListaProduse = ({ produse }: Props) => {
  const router = useRouter();

  return produse.map((produs) => (
    <TableRow
      key={produs.id}
      className="bg-nueva-gray/50 hover:bg-nueva-gray/50 !border-0"
    >
      <TableCell className="py-3">{produs.name}</TableCell>
      <TableCell className="py-3">{produs.model}</TableCell>
      <TableCell className="py-3">{produs.raft}</TableCell>
      <TableCell className="py-3 capitalize">
        {produs.gender.toLocaleLowerCase()}
      </TableCell>
      <TableCell className="py-3 capitalize">
        {produs.category.toLocaleLowerCase()}
      </TableCell>
      <TableCell className="float-end py-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="border-0 rounded-30"
            >
              <EllipsisVertical className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            {/* <DropdownMenuItem>
                  <Link href={`/dashboard/produse/`}>Editează</Link>
                </DropdownMenuItem> */}
            <DropdownMenuItem
              onClick={async () => {
                await deleteProduct(produs.id).then((response) => {
                  if (response.error) {
                    toast.error(response.error);
                  }

                  if (response.success) {
                    toast.success(response.success);
                    router.refresh();
                  }
                });
              }}
            >
              Șterge
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  ));
};

export default ListaProduse;
