import Navbar from "@/app/components/Layout/Navbar";
import "./globals.css";
import Footer from "./components/Layout/Footer";

export const metadata = {
  title: "Travel Agency",
  description: "Travel Agency Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
