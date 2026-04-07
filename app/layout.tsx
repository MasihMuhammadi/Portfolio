import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Masihullah Muhammadi",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <Navbar />

        {/* Gradient Background */}
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-70"
          style={{
            background: `
      /* Top-left ellipse */
      radial-gradient(ellipse 80% 50% at 10% 0%, rgba(20,120,100,0.112122815), transparent 55%),

      /* Bottom-left ellipse */
      radial-gradient(ellipse 70% 50% at 10% 100%, rgba(20,120,100,0.1121308), transparent 50%),

      /* Bottom-right ellipse */
      radial-gradient(ellipse 70% 50% at 95% 100%, rgba(0,255,180,0.1112119), transparent 50%)
    `,
          }}
        />

        {/* Page Content */}
        <div className="relative z-10">{children}</div>
        {/* <div
          className="pointer-events-none fixed inset-0 z-0 opacity-70"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 10% 0%, rgba(20,120,100,0.25), transparent 55%),
              radial-gradient(ellipse 70% 45% at 95% 100%, rgba(20,120,100,0.18), transparent 50%),
              radial-gradient(ellipse at 10% 90%, rgba(20,120,100,0.01), transparent 60%),
              radial-gradient(ellipse 30% 70% at 10% 90%, rgba(255,0,0,0.01), transparent 60%)
            `,
          }}
        /> */}

        <Footer />
      </body>
    </html>
  );
}
