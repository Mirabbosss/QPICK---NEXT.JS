import "./globals.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata = {
  title: "QPICK",
  description: "QPICK online shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Header />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
