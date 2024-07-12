import Animals from "@/components/Home/Animals";
import HomePage from "@/components/Home/Home";
import { serverUrl } from "@/helpers/config";
import { categoryTag } from "@/helpers/const";
import { ICategory } from "@/type/category.type";


async function getCategoryData() {
  const res = await fetch(`${serverUrl}/category`, { next: { tags: [categoryTag] }, cache: 'no-store' })
  const result = res.json()
  return result
}



async function getAnimalData(params: string) {

}
export default async function Home() {

  const categoryResult = await getCategoryData();
  const categoryData: { data: ICategory[] } = categoryResult;

  // console.log(categoryData)
  return (
    <main className="container mx-auto min-h-screen py-[5rem] px-3">
      <HomePage categoryData={categoryData}></HomePage>
    </main>
  );
}
