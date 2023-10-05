"use client";
import "@/../style/globals.css";
import Providers from "./utils/provider";

export const metadata = {
  title: "Biss",
  description: "Generated by create next app",
};

interface rootProps {
  children:React.ReactNode
}

export default function RootLayout({children}:rootProps):JSX.Element{
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}