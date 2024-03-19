import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Black Pearl",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <script
        src="https://kit.fontawesome.com/712296eaa0.js"
        crossorigin="anonymous"
      ></script>
    </html>
  );
}
