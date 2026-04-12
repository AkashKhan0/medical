import Navbar from "@/components/top_view/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "A Plus Mart BD Medical",
  description: "A Plus Mart BD Medical - Your Trusted Online Medical Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
