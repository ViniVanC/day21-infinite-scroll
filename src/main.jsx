import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DbProvider } from "./hooks/useDb";
import { InfiniteScrollProvider } from "./hooks/useInfiniteScroll";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DbProvider>
      <InfiniteScrollProvider>
        <App />
      </InfiniteScrollProvider>
    </DbProvider>
  </React.StrictMode>
);
