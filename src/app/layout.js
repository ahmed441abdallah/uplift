import { Khand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const khand = Khand({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-khand",
  display: "swap",
});

export const metadata = {
  title: "UpLift Interiors",
  description: "A modern interior design studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={khand.variable}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
