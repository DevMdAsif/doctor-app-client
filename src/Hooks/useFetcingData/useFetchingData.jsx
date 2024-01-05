import { useEffect, useState } from "react";
import axios from "axios";

function useFetchingData(urlPath) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        setError(false);
        setLoading(false);
        const res = await axios.get(urlPath);
        setData(res.data);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, [urlPath]);
  return { data, error, loading };
}

export default useFetchingData;
