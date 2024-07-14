import Home from "@/components/Home/Home";
import { serverUrl } from "@/helpers/config";
import { animalTag, categoryTag } from "@/helpers/const";



//!  created for ssr
async function UseFetchData(url: string, tagName: string[]) {
  try {
    const res = await fetch(url, {
      next: { tags: tagName },
      cache: "no-store",
    });
    // console.log(res, "res");
    const result = await res.json();
    return result;

  } catch (error) {
    console.log(error)

  }
}
export default async function HomePage() {


  //! my reuseable server side hook for fetch data
  const categoryResult = await UseFetchData(`${serverUrl}/category`, [categoryTag]);
  const animalAllResult = await UseFetchData(`${serverUrl}/animal/all`, [animalTag]);



  // console.log(categoryData)
  return (
    <main className="container mx-auto min-h-screen py-[5rem] px-3">
      {/* //! separated the Home bcz of SSR data fetch */}
      <Home categoryData={categoryResult} animalAllResult={animalAllResult}></Home>
    </main>
  );
}
