import getProducts from "@/actions/admin/produse/get";
import ListaProduse from "@/components/admin/produse/lista-produse";
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
import { Package2, PlusCircle } from "lucide-react";
import Link from "next/link";

export default async function DashProdusePage() {
  const produse = await getProducts();

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="flex items-center text-lg font-bold">
          <Package2 className="text-nueva-orange mr-2" /> Produse
        </h1>

        <Link href="/dashboard/produse/adauga">
          <Button size="sm" className="space-x-2">
            <PlusCircle className="w-5 h-5" />
            <span>Adaugă produs</span>
          </Button>
        </Link>
      </div>

      <div className="text-base font-normal mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Lista Produselor</CardTitle>
            <CardDescription>Produsele disponibile în magazin.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="bg-nueva-dark hover:bg-nueva-dark !border-0">
                  <TableHead className="text-nueva-white">Nume</TableHead>
                  <TableHead className="text-nueva-white">Model</TableHead>
                  <TableHead className="text-nueva-white">Raft</TableHead>
                  <TableHead className="text-nueva-white">Gen</TableHead>
                  <TableHead className="text-nueva-white">Categorie</TableHead>
                  <TableHead className="text-end text-nueva-white">
                    Acțiuni
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {produse.length === 0 ? (
                  <TableRow className="bg-nueva-gray/50 hover:bg-nueva-gray/50 !border-0">
                    <TableCell
                      colSpan={6}
                      className="py-3 text-center italic text-nueva-white/70 font-light"
                    >
                      Nu sunt produse adăugate.
                    </TableCell>
                  </TableRow>
                ) : (
                  <ListaProduse produse={produse} />
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
