import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WindowSizeProvider from "./context/WindowSizeProvider";
import AudioProvider from "./context/AudioProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WindowSizeProvider>
      <AudioProvider>
        <App />
      </AudioProvider>
    </WindowSizeProvider>
  </React.StrictMode>
);
