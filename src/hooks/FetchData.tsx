
import { serverUrl } from "@/helpers/config";
import { useState, useEffect } from "react";

type Response = Record<string, any>;
const FetchData = async (url: string) => {
  const [data, setData] = useState<Response | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchingFunction = async () => {
      try {
        const response = await fetch(`${serverUrl}${url}`);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const fetchedData = await response.json();
        setData(fetchedData?.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchingFunction();
  }, [url]);

  return { data, isLoading, error };
};

export default FetchData;
