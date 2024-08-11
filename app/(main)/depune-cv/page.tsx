import DepuneCVWrapper from "@/components/depune-cv/depune-cv-wrapper";

export default function DepuneCVPage() {
  return (
    <div className="container">
      <div className="mt-24 lg:mt-32">
        <h1 className="text-[48px] font-bold text-nueva-white max-w-[700px] text-center mx-auto capitalize leading-tight">
          Alătură-te Echipei Noastre!
        </h1>
        <p className="text-[20px] text-nueva-white text-center mt-3 max-w-[770px] mx-auto">
          Dacă ești pasionat de modă și vrei să faci parte din echipa noastră
          dinamică, te invităm să ne trimiți CV-ul tău. Căutăm oameni talentați
          și motivați, gata să contribuie la succesul magazinului Nueva
          Clothing. Trimite-ne CV-ul și hai să construim împreună viitorul
          modei!
        </p>
      </div>

      <div className="max-w-[766px] rounded-30 bg-gradient-to-br from-nueva-gray2 to-nueva-dark border border-nueva-gray/50 mx-auto mt-24 px-5 lg:px-16 py-10">
        <DepuneCVWrapper />
      </div>
    </div>
  );
}
