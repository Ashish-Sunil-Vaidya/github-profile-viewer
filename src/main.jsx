import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles";
import GithubApiProvider from "./context/GithubApiContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GithubApiProvider>
      <App />
    </GithubApiProvider>
  </React.StrictMode>
);
