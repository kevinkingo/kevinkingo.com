import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiancheng (Kevin) Sun",
  description: "Senior Research Scientist at Google working on Google Beam.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
