import AdaugaProdus from "@/components/admin/produse/adauga-produs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ArrowLeft, PackagePlus } from "lucide-react";
import Link from "next/link";

export default async function DashAddProductPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <Link
          href="/dashboard/produse"
          className="flex flex-row items-center space-x-2 text-sm group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:text-nueva-orange duration-200" />
          <span className=" group-hover:text-nueva-orange duration-200">
            Înapoi
          </span>
        </Link>
      </div>

      <div className="text-base font-normal mt-16">
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center text-lg font-bold">
              <PackagePlus className="text-nueva-orange mr-2" /> Adaugă produs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AdaugaProdus />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
