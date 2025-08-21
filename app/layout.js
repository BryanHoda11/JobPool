import { Montserrat, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
})

export const metadata = {
  title: "JobPool",
  description: "Explore & Land your dream career now here on JobPool!",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
