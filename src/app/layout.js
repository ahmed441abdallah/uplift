import { Khand } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/header/index.jsx";
import { ProjectsProvider } from "../context/projectsContext.jsx";

const khand = Khand({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-khand",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata = {
  title: "UpLift Interiors",
  description: "A modern interior  Design and Built company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={khand.variable}>
      <body className="antialiased ">
        <Header />
        <ProjectsProvider>
          {children}
        </ProjectsProvider>
        <Footer />
      </body>
    </html>
  );
}
