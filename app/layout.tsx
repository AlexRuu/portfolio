import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer/footer";

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
      <body className="w-full">
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
