import Animals from "@/components/Home/Animals";
import CategorySection from "@/components/Home/CategorySection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen py-[5rem] px-3">
      <CategorySection />
      <Animals />
    </main>
  );
}
