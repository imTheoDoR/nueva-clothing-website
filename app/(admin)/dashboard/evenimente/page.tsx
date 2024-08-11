import getEvents from "@/actions/admin/evenimente/get";
import ListaEvenimente from "@/components/admin/evenimente/lista-evenimente";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PartyPopper, PlusCircle } from "lucide-react";
import Link from "next/link";

export default async function DashEventPage() {
  const events = await getEvents();

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="flex items-center text-lg font-bold">
          <PartyPopper className="text-nueva-orange mr-2" /> Evenimente
        </h1>

        <Link href="/dashboard/evenimente/adauga">
          <Button size="sm" className="space-x-2">
            <PlusCircle className="w-5 h-5" />
            <span>Adaugă eveniment</span>
          </Button>
        </Link>
      </div>

      <div className="text-base font-normal mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Lista Evenimentelor</CardTitle>
            <CardDescription>Evenimentele organizate.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-nueva-dark hover:bg-nueva-dark !border-0">
                  <TableHead className="text-nueva-white">Nume</TableHead>
                  <TableHead className="text-nueva-white">Data</TableHead>
                  <TableHead className="text-nueva-white">
                    Desfășurare
                  </TableHead>
                  <TableHead className="text-end text-nueva-white">
                    Acțiuni
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {events.length === 0 ? (
                  <TableRow className="bg-nueva-gray/50 hover:bg-nueva-gray/50 !border-0">
                    <TableCell
                      colSpan={6}
                      className="py-3 text-center italic text-nueva-white/70 font-light"
                    >
                      Nu sunt evenimente adăugate.
                    </TableCell>
                  </TableRow>
                ) : (
                  <ListaEvenimente events={events} />
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
