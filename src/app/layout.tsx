import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const pretendardVariable = localFont({
  src: ".//fonts/PretendardVariable.woff2",
});

export const metadata: Metadata = {
  title: "덕 메이트",
  description:
    "팬이 만들어 더 편리하고 안전한 K-POP 팬들을 위한 안전한 굿즈 거래 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendardVariable.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
