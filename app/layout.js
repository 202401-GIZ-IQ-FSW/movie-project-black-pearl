import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Black Pearl",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
      <script
        src="https://kit.fontawesome.com/712296eaa0.js"
        crossorigin="anonymous"
      ></script>
    </html>
  );
}
