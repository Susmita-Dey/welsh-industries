import FormFields from "@/components/FormFields";
import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="relative w-full flex justify-center">
        <div className="absolute md:top-1/2 transform md:-translate-y-1/2">
          <FormFields />
        </div>
      </div>
      <section className="bg-[url('/bg.png')] bg-cover bg-no-repeat bg-center min-h-screen w-full h-full"></section>
    </>
  );
}
