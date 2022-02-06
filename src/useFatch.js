import { useState, useEffect } from "react";
/* Vår custom hook för att fetcha data från api */
const useFatch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState(null);
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
          setData(data);
          setIsLoading(false);
          setError(null);
          setNotification(data.length);
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
  return { data, isLoading, error, notification };
};

export default useFatch;
