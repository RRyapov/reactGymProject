import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
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
					</Routes>
					<Outlet />
				</Container>
				<Footer />
			</MainBackground>
		</QueryClientProvider>
	);
};

export default App;
