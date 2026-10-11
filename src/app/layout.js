import { Geist, Geist_Mono, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import CategoryLinks from "@/components/CategoryLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-hind-siliguri",
});

export const metadata = {
  title: "বাজার দর - প্রয়োজনীয় পণ্যের দাম এক নজরে",
  description: "আজকের বাজারের নিত্যপ্রয়োজনীয় পণ্যের দামের হিসাব",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#E1E8E1]">
        <Navbar></Navbar>
        <CategoryLinks />
        <Marquee></Marquee>
        {children}
        <Footer></Footer>
        <Toaster />
      </body>
    </html>
  );
}