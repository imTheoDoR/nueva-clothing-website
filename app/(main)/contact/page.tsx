export default function ContactPage() {
  return (
    <div className="container">
      <div className="mt-24 lg:mt-32">
        <h1 className="text-[36px] lg:text-[48px] font-bold text-nueva-white max-w-[677px] text-center mx-auto capitalize leading-tight">
          Contactează-ne
        </h1>
        <p className="text-[20px] text-nueva-white text-center mt-3 max-w-[770px] mx-auto">
          Magazinul de haine Reyes Clothing se află lângă Baza Militară zona
          Zancudo, Str. Route 68. Suntem aici pentru a răspunde tuturor
          întrebărilor tale și pentru a te ajuta cu orice ai nevoie!
        </p>
      </div>

      <div className="bg-[url('/images/contact-map.jpg')] bg-cover w-full lg:w-[1100px] h-[466px] bg-center mx-auto rounded-30 mt-16" />
    </div>
  );
}
