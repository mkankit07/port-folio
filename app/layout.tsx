import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Kumar Maurya — Node.js Developer",
  description: "Portfolio of Ankit Kumar Maurya, an experienced Node.js and full-stack web developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
