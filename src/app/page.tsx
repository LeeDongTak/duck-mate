import MainSection from "@/components/main/main-section/main-section";
import SubSection from "@/components/main/sub-section/sub-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-auto">
      <MainSection />
      <SubSection />
    </main>
  );
}
