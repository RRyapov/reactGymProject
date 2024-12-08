import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Container, Footer, MainBackground } from "./shared/Container";
import { Reset } from "styled-reset";

import "./App.scss";

import DetailedProgramPage from "@pages/DetailedProgramPage";
import MainPage from "@pages/MainPage";
import ProgramsPage from "@pages/ProgramPage";
import { Header } from "./widgets/Header";
import { LazyMainPage } from "@pages/MainPage/ui/LazyMainPage";
import { LazyProgramsPage } from "@pages/ProgramPage/ui/LazyProgramsPage";
import { LazyDetailedProgramPage } from "./pages";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 120000,
		},
	},
});

const App: FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<MainBackground>
				<Container>
					<Reset />

					<Header />
					<Routes>
						<Route
							path="/"
							element={<MainPage />}
						/>
						<Route
							path="/programs"
							element={<ProgramsPage />}
						/>
						<Route
							path="/program/:id"
							element={<DetailedProgramPage />}
						/>
					</Routes>
					<Outlet />
				</Container>
				<Footer />
			</MainBackground>
		</QueryClientProvider>
	);
};

export default App;
