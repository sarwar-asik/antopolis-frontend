import { serverUrl } from "@/helpers/config";

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
