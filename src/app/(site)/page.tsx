import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LokaTani",
  description: "Menjual barang-barang pertanian.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
