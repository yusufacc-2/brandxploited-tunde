import type { Metadata } from "next";
import { Anton, Courier_Prime } from "next/font/google"; // Import new fonts
import "./globals.css";

// Configure Anton (Display font)
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

// Configure Courier Prime (Body font)
const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "BrandXploited | Indie Music Merch",
  description: "We create your music merch and your clothing brand. High energy, high revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${courierPrime.variable}`}>
        {children}
      </body>
    </html>
  );
}
