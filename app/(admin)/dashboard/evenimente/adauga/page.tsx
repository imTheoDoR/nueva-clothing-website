import AdaugaEveniment from "@/components/admin/evenimente/adauga-eveniment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { ArrowLeft, SmilePlus } from "lucide-react";
import Link from "next/link";

export default async function DashAddEventPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <Link
          href="/dashboard/evenimente"
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
              <SmilePlus className="text-nueva-orange mr-2" /> Adaugă eveniment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AdaugaEveniment />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
