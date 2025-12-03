import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { enableStaticRendering } from "mobx-react-observer";

enableStaticRendering(typeof window === "undefined");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
