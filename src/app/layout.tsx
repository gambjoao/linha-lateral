import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Linha Lateral",
  description: "Preview Only - As últimas noticias de futebol em Portugal",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
