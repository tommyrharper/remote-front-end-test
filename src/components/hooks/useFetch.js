import { useState, useEffect } from 'react';

const useFetch = (url, opts) => {
  const [fetchData, setFetchData] = useState({
    response: null,
    isLoading: false,
    hasError: false
  });

  const { response, loading, hasError } = fetchData;

  useEffect(() => {
    setFetchData({ ...fetchData, loading: true});
    (async () => {
      try {
      const res = await fetch(url).then((payload) => payload.json());
      setFetchData({ response: res, isLoading: false, hasError: false });
    } catch {
      setFetchData({ response: null, isLoading: false, hasError: true });
    }})()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return [response, loading, hasError];
}

export default useFetch;
