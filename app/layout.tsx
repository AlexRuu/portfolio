import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="en-us">
      <body className="w-full">
        <div className="max-w-[100vw] overflow-x-hidden w-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
