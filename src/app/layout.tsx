import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from '@/components/ScrollToTop';
import { cn } from "@/lib/utils";
import { Geist } from "next/font/google";
import ThemeProvider from "@/components/Common/Theme/ThemeProvider";
import Header from "@/components/Layout/Header";
import NextTopLoader from 'nextjs-toploader'

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={inter.className}>
      <NextTopLoader  color="#0abfa3" showSpinner easing="ease-in-out"/>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
              <Header />
              <main >
                {children}
              </main>
              <Footer />
            <ScrollToTop />
          </ThemeProvider>
      </body>
    </html>
  );
}
