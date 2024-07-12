import Animals from "@/components/Home/Animals";
import CategorySection from "@/components/Home/CategorySection";
import { serverUrl } from "@/helpers/config";
import Image from "next/image";

async function getCategoryData() {
  const res = await fetch(`${serverUrl}/category`)
  const result = res.json()
  return result
}

export default async function Home() {

  const categoryData = await getCategoryData()

  // console.log(categoryData)
  return (
    <main className="container mx-auto min-h-screen py-[5rem] px-3">
      <CategorySection categoryData={categoryData?.data} />
      <Animals />
    </main>
  );
}
