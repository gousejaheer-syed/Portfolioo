import React from "react";
import ReactDOM from "react-dom/client";

import "./theme.css";   // Theme variables
import "./Global.css";  // Global styles
import "./index.css";   // Vite default/global styles

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
