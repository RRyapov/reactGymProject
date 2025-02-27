import { createRoot } from "react-dom/client";
import App from "./src/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import React from "react";

const root = document.getElementById("root");
if (!root) {
	throw new Error("root not found");
}

const ProgramsMF = lazy(() => import("remotePrograms/ProgramsMF"));

const container = createRoot(root);
const router = createBrowserRouter([
	{
		path: "*",
		element: <App />,
		children: [
			{
				path: "programs",
				element: (
					<Suspense>
						<ProgramsMF />
					</Suspense>
				),
			},
		],
	},
]);
container.render(<RouterProvider router={router} />);
