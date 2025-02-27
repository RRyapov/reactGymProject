import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, lazy, Suspense } from "react";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import { Container, Footer, MainBackground } from "./shared/Container";
import { Reset } from "styled-reset";

import MainPage from "@pages/MainPage";
import { Header } from "./widgets/Header";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 120000,
		},
	},
});

const ProgramsMF = lazy(() => import("remotePrograms/ProgramsMF"));
const LazyDetailedProgramPage = lazy(
	() => import("remotePrograms/DetailedProgramPage")
);

const App: FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<MainBackground>
				<Container>
					<Header />
					<Routes>
						<Route
							path="/"
							element={<MainPage />}
						/>
						<Route
							path="/programs"
							element={<ProgramsMF />}
						/>
						<Route
							path="/programs:id"
							element={<LazyDetailedProgramPage />}
						/>
					</Routes>
					<Reset />
				</Container>
				<Footer />
			</MainBackground>
		</QueryClientProvider>
	);
};

export default App;
