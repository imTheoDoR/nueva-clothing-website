import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Reyes Clothing",
  description:
    "Reyes Clothing - Magazin de modă urbană din 11 aprilie 2024, situat lângă Baza Militara în zona Zancudo de pe Ruta 68. Descoperă colecții unice și stiluri personalizate într-o locație convenabilă.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="ro">
        <body className={font.className}>
          <main>
            <Toaster />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
