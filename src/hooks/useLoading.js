import { useState, useEffect } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(id);
  }, []);

  return { loading };
};

export default useLoading;
