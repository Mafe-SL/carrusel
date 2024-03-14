import Image from "next/image";
import { Inter } from "next/font/google";
import Carousel from "./components/Carousel";
import ImageCarouselPage from "./components/ImageCarouselPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <ImageCarouselPage />
    </>
  );
}
