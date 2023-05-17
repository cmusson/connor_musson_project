import Header from "./Header";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const lotrFont = localFont({
  src: [
    {
      path: "../public/fonts/lotrFont.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-lotrFont",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "One project to rule them all",
  description: "Lord of the Rings Information site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lotrFont.variable} ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
