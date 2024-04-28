import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer/footer";
import { cn } from "@/lib/utils";
import { poppins } from "./font";

export const metadata: Metadata = {
  title: "Alex Ru",
  description: "Alex Ru's Porfolio",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-us" className="scroll-smooth">
      <body className={cn("w-full", poppins.className)}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="max-w-[100vw] overflow-x-hidden w-full mt-auto">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
