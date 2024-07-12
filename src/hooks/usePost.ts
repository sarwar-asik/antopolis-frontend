import { serverUrl } from "@/helpers/config";

type PostData = Record<string, any>;
export async function UsePost(
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
