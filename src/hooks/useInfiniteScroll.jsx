import React, { createContext, useContext, useEffect, useState } from "react";

const InfiniteScrollContext = createContext();
export const useInfiniteScroll = () => useContext(InfiniteScrollContext);

export const InfiniteScrollProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
  };

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`/data/images.json`);
      const result = await response.json();
      setImages((prevImages) => [...prevImages, ...result]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop - 200 ===
      document.documentElement.offsetHeight - 200
    ) {
      setLoading(true);
      fetchData();
    }
  };

  return (
    <InfiniteScrollContext.Provider
      value={{
        images,
        loading,
        breakpointColumnsObj,
      }}
    >
      {children}
    </InfiniteScrollContext.Provider>
  );
};
