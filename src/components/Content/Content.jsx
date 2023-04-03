import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { Container } from "../Container";
import { Loader } from "../Loader";
import { ContentItem } from "./ContentItem";

export const Content = () => {
  const { images, loading, breakpointColumnsObj } = useInfiniteScroll();

  return (
    <main className="mt-[90px] max-sm:mt-[60px]">
      <Container>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="gallery-grid"
          columnClassName="gallery-grid_column"
        >
          {images.map((item, i) => (
            <ContentItem key={i} image={item.src} alt={item.alt} />
          ))}
        </Masonry>
        {loading && <Loader />}
      </Container>
    </main>
  );
};
