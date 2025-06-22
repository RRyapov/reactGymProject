import { createRoot } from "react-dom/client";
import App from "./src/App";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const root = document.getElementById("root");
if (!root) {
	throw new Error("root not found");
}

const container = createRoot(root);

container.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
