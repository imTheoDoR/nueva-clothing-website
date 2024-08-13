import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { DraftingCompass, MapPin, Shirt } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/images/elipse-top.png')] w-full lg:w-[615px] h-full lg:h-[710px] bg-contain bg-no-repeat absolute top-0 left-0" />
      <section className="container flex flex-col lg:flex-row justify-center items-center mt-24 lg:mt-32 z-10 relative lg:gap-x-32 gap-y-16 lg:gap-y-0">
        <div>
          <h1 className="text-[56px] font-bold text-nueva-white">
            NUEVA CLOTHING
          </h1>
          <p>
            Din 11 aprilie 2024, NUEVA CLOTHING redefinește stilul urban chiar
            lângă complexul FplayT Residence. Ne mândrim cu o colecție diversă
            de haine de calitate, atent selecționate pentru a reflecta
            personalitatea și preferințele tale. Descoperă noul standard în
            modă, într-o locație convenabilă și cu servicii dedicate fiecărui
            client.
          </p>

          <div className="mt-5 space-x-5">
            <Link href="/evenimente">
              <Button
                variant="default"
                className="uppercase font-bold tracking-wide"
              >
                Evenimente
              </Button>
            </Link>

            <Link href="/magazin">
              <Button
                variant="secondary"
                className="uppercase font-bold tracking-wide"
              >
                Magazin
              </Button>
            </Link>
          </div>
        </div>

        <Image
          src="/images/hero.png"
          width={472}
          height={385}
          alt="hero"
          className="w-full lg:w-[472px]"
          priority
        />
      </section>

      <div className="relative z-20">
        <div className="bg-[url('/images/elipse-gray.png')] w-full lg:w-[724px] h-[800px] lg:h-[1060px] bg-no-repeat bg-contain absolute top-[35%] lg:top-0 right-0 z-10" />
        <section className="container-sm lg:container mx-3 lg:mx-auto bg-gradient-to-b from-nueva-black/50 to-nueva-dark/50 mt-32 rounded-30 px-5 py-16 border border-nueva-gray/50 relative z-20 backdrop-blur-lg">
          <h4 className="uppercase font-bold text-[32px] text-center">
            De ce sa alegi magazinul nostru
          </h4>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-5 items-center justify-around mt-16">
            <div className="max-w-[290px]">
              <div className="flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-nueva-white" />
                <span className="font-semibold text-[20px] capitalize">
                  Localizare
                </span>
              </div>
              <p className="text-[14px] mt-3">
                Suntem amplasați strategic lângă complexul FplayT Residence,
                facilitând accesul rapid și comod pentru toți cetățenii.
              </p>
            </div>

            <div className="max-w-[290px]">
              <div className="flex items-center space-x-2">
                <Shirt className="w-6 h-6 text-nueva-white" />
                <span className="font-semibold text-[20px] capitalize">
                  Colecție Unică
                </span>
              </div>
              <p className="text-[14px] mt-3">
                Oferim haine unice, atent selecționate, care îți permit să-ți
                exprimi stilul și să ieși în evidență în comunitate.
              </p>
            </div>

            <div className="max-w-[290px]">
              <div className="flex items-center space-x-2">
                <DraftingCompass className="w-6 h-6 text-nueva-white" />
                <span className="font-semibold text-[20px] capitalize">
                  Servicii Personalizate
                </span>
              </div>
              <p className="text-[14px] mt-3">
                Echipa noastră prietenoasă te ajută să găsești ținuta perfectă
                pentru orice ocazie din viața de zi cu zi.
              </p>
            </div>
          </div>
        </section>

        <section className="container-sm lg:container mx-3 lg:mx-auto mt-32 relative z-20">
          <h4 className="uppercase font-bold text-[30px] lg:text-[32px] text-center">
            Întrebări adresate frecvent
          </h4>

          <div className="w-full lg:max-w-[960px] mx-auto mt-16">
            <Accordion type="single" defaultValue="faq-1" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger>Care este salariul?</AccordionTrigger>
                <AccordionContent>
                  {/* Salariul pentru toate funcțiile este de 70.000$, iar pentru gradul de Supervisor începe de la 80.000$, cu un bonus
                  de 2.000$/oră pentru orele suplimentare peste 10 ore de
                  pontaj. */}
                  <p>Salariu VANZATOR = 70.000$</p>
                  <p>Salariu ASISTENT MANAGER = 70.000$</p>
                  <p>Salariu MANAGER = 70.000$</p>
                  <p>Salariu SUPERVIZOR = 80.000$</p>
                  <p className="mt-3">
                    Cu un bonus de 2.000$/oră pentru orele suplimentare peste 10
                    ore de pontaj.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger>Care sunt bonusurile?</AccordionTrigger>
                <AccordionContent>
                  Se oferă un bonus de 10.000$ pentru fiecare persoană
                  recomandată care se angajează și îndeplinește minimul de ore
                  de pontaj specificate. De asemenea, Angajatul Săptămânii este
                  recompensat cu premii în bani sau bunuri.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger>
                  Există un minim de luni pentru a mă angaja?
                </AccordionTrigger>
                <AccordionContent>
                  Da, trebuie să aveți un minim de 10 luni.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger>
                  Care este programul magazinului ?
                </AccordionTrigger>
                <AccordionContent>De la 08:00 - 00:00 !</AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5">
                <AccordionTrigger>
                  Trebuie să citesc regulamentul?
                </AccordionTrigger>
                <AccordionContent>
                  Da, este obligatoriu să citești regulamentul. Dacă nu îl iei
                  la cunoștință, vei fi supus unei penalizări.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </>
  );
}
