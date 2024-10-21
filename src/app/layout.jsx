import "./globals.scss";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata = {
  title: "QPICK",
  description: "QPICK online shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../../public/icons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ChakraProvider>
          <Header />
          <div className="pt-[100px] pb-5 md:pb-[170px]">
            {children}
          </div>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
