import React from "react";
import { appRouter } from "./routes/index.jsx";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={appRouter} />
	</React.StrictMode>
);
