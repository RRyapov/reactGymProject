import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LazyDetailedProgramPage, LazyProgramsPage } from "./pages";
import { Suspense } from "react";
// import { LazyDetailedProgramPage } from "@pages/DetailedProgramPage";
// import { LazyDetailedProgramPage } from "@pages/DetailedProgramPage/ui/LazyDetailedProgramPage";

const root = document.getElementById("root");

if (!root) {
	throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/programs",
				element: (
					<Suspense fallback={"Загрузка..."}>
						<LazyProgramsPage />
					</Suspense>
				),
			},
			{
				path: "/programs/:id",
				element: (
					<Suspense fallback={"Загрузка..."}>
						<LazyDetailedProgramPage />
					</Suspense>
				),
			},
		],
	},
]);

container.render(<RouterProvider router={router} />);
