import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from '@/components/ScrollToTop';
import Aoscompo from "@/utils/aos";
import NextTopLoader from 'nextjs-toploader';
import { AuthDialogProvider } from "./context/AuthDialogContext";
import { cn } from "@/lib/utils";

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
      <NextTopLoader />
      <AuthDialogProvider>
       
          <Aoscompo>
            <main >
              {children}
            </main>
            <Footer />
          </Aoscompo>
          <ScrollToTop />
        </AuthDialogProvider>
      </body>
    </html>
  );
}
