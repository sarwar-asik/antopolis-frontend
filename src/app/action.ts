"use server";
export default async function createAnimalAction(prevState: any, formData: FormData) {
  console.log(formData, "createAnimalDat.ts");
  // Mutate data

  return { message: "yes it worked" };
}
