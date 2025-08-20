'use client'
import { Montserrat, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

// export const metadata = {
//   title: "JobPool",
//   description: "Explore & Land your dream career now here on JobPool!",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideFooter = pathname === "/";

  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}
