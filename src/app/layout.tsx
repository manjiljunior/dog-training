import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./styles/main.scss";
import type { Metadata } from "next";
import { Fredoka, Readex_Pro } from "next/font/google";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import Providers from "./Providers";
import MobileMenu from "@/components/MobileMenu";

export const metadata: Metadata = {
  title: "Dog Traning",
  description: "",
};

const fredoka = Fredoka({
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-fredoka",
});

const readex_pro = Readex_Pro({
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-readex-pro",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.className} ${readex_pro.variable} w-[100vw] overflow-x-hidden`}
      >
        <Providers>
          {children}
          <Footer />
          <Copyright />
          <ScrollToTop />
          <MobileMenu />
        </Providers>
      </body>
    </html>
  );
}
