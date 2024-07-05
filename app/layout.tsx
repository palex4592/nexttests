import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./ui/topnav";
const inter = Inter({ subsets: ["latin"] });
import { ThemeProvider } from "./lib/theme";
import GlobalStyles from "./styles/globalStyles";

export const metadata: Metadata = {
  title: "Fresh Start",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <html lang="en">
        <body className={inter.className}>
          <TopNav />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
