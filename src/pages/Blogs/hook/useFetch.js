import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_REACT_NOCODE_API_KEY;

  useEffect(() => {
    (async function () {
      setLoading(true);
      await axios
        .get(baseUrl)
        .then((response) => setData(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    })();
  }, [baseUrl]);

  return { data, error, loading };
};

export default useFetch;
