import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  let year;
  if (currentYear > 2024) {
    year = `2024 - ${currentYear}`;
  } else {
    year = currentYear;
  }

  return (
    <footer className="mt-32">
      <h5 className="text-center text-white/50 italic font-light text-[12px] mb-3">
        Acest site este fictiv și a fost creat exclusiv pentru un magazin
        virtual din cadrul unui joc.
      </h5>

      <div className="bg-gradient-to-b from-nueva-black/35 to-transparent border-t border-nueva-gray/35">
        <div className="container py-5 text-sm">
          &copy; {year} by{" "}
          <Link href="/" className="text-nueva-orange">
            Reyes Clothing
          </Link>
          . All right are reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
