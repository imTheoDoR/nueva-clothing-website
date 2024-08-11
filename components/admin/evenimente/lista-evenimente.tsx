"use client";

import deleteEvent from "@/actions/admin/evenimente/delete";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import formatDate from "@/utils/format-date";
import { EllipsisVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  events: {
    id: string;
    date: string;
    name: string;
    registrationTime: string;
    startTime: string;
    prizeAmount: number;
    bannerUrl: string;
    locationImageUrl: string;
    colaborator: string | null;
    infoLocatie: string;
  }[];
}

const ListaEvenimente = ({ events }: Props) => {
  const router = useRouter();

  return events.map((event) => (
    <TableRow
      key={event.id}
      className="bg-nueva-gray/50 hover:bg-nueva-gray/50 !border-0"
    >
      <TableCell className="py-3">{event.name}</TableCell>
      <TableCell className="py-3 capitalize">
        {formatDate(event.date)}
      </TableCell>
      <TableCell className="py-3">{event.startTime}</TableCell>
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
                await deleteEvent(event.id).then((response) => {
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

export default ListaEvenimente;
