import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Container } from "../Container";
import { ContentItem } from "./ContentItem";

export const Content = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
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
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setLoading(true);
      fetchData();
    }
  };

  return (
    <main>
      <Container>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="gallery-grid"
          columnClassName="gallery-grid_column"
        >
          {images.map((item) => (
            <ContentItem image={item.src} alt={item.alt} />
          ))}
        </Masonry>
        {loading && (
          <h4 className="fixed left-0 top-0  text-center text-[100px] font-bold">
            Loading...
          </h4>
        )}
      </Container>
    </main>
  );
};
