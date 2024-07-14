"use server";

import { serverUrl } from "@/helpers/config";
import { animalTag } from "@/helpers/const";
import { revalidateTag } from "next/cache";

type PostData = Record<string, any>;

//!  post with json body
export async function postSSData(
  url: string,
  bodyData: PostData,
  options = {} as RequestInit
): Promise<any> {
  try {
    const response = await fetch(`${serverUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
      body: JSON.stringify(bodyData),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in usePost:", error);
    throw error;
  }
}

//! post with file and body
export async function postSSDataWithFile(
  url: string,
  formData: FormData,
  options = {} as RequestInit
): Promise<any> {
  try {
    const response = await fetch(`${serverUrl}/${url}`, {
      method: "POST",
      ...options,
      body: formData, // FormData instance
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in usePostWithFile:", error);
    throw error;
  }
}

///! for upload image
export const uploadImage = async (image: File) => {
  const formImageData = new FormData();
  formImageData.append("image", image);
  const url = `${serverUrl}/image/upload`;
  const responseImage = await fetch(url, {
    method: "PUT",
    body: formImageData,
  });
  if (responseImage.ok) {
    const imageData = await responseImage.json();
    return imageData.data;
  } else {
    throw new Error("Failed to upload image");
  }
};



export async function actionRevalidate(tag: string) {
  revalidateTag(tag);
}

// path reviled 

export async function revalidatePath(path: string) {
  revalidatePath(path);
}