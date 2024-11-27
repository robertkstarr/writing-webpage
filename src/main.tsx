import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import RobertStarrProps from "./RobertStarr/RobertStarrProps.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App {...RobertStarrProps} />
  </React.StrictMode>
);
