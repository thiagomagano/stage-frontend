import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stage Teste Técnico",
  description:
    "Validação Técnica para vaga de desenvolvedor fullstack na stage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <NavBar />
        <main className="flex min-h-screen flex-col items-center  gap-20 p-24">
          {children}
        </main>
      </body>
    </html>
  );
}
