"use client";
import "@/../style/globals.css";
import Providers from "./utils/provider";

export const metadata = {
  title: "Biss",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
