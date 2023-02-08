import { createContext, useState } from "react";

const CacheContext = createContext();

export function CacheContextProvider({ children }) {
  const [cache, setCache] = useState([]);

  function addToCache(item) {
    setCache([item, ...cache]);
  }

  function searchCache(url) {
    return cache.find((item) => item.fullUrl === url);
  }

  return (
    <CacheContext.Provider value={{ cache, addToCache, searchCache }}>
      {children}
    </CacheContext.Provider>
  );
}

export default CacheContext;
