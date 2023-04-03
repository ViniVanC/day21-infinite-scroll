import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { InfiniteScrollProvider } from "./hooks/useInfiniteScroll";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfiniteScrollProvider>
      <App />
    </InfiniteScrollProvider>
  </React.StrictMode>
);
