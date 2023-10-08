"use client";
import "@/../style/globals.css";
import Providers from "./utils/provider";

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