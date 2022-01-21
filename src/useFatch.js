import { useState, useEffect } from "react";
const useFatch = (url) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Ett meddelande");
          }
          return res.json();
        })
        .then((data) => {
          setProduct(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          }
          setIsLoading(false);
          setError(err.message);
        });
    }, 300);
    return () => abortCont.abort();
  }, [url]);
  return { product, isLoading, error };
};

export default useFatch;
