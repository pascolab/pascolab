import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from '@/components/ScrollToTop';
import Aoscompo from "@/utils/aos";
import NextTopLoader from 'nextjs-toploader';
import { AuthDialogProvider } from "./context/AuthDialogContext";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <NextTopLoader />
      <AuthDialogProvider>
       
          <Aoscompo>
            <Header />
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
