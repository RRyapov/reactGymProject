import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, lazy, Suspense } from "react";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import { Container, Footer, MainBackground } from "./shared/Container";
import { Reset } from "styled-reset";
import { ErrorBoundary } from "./shared/ui/ErrorBoundary/ErrorBoundary";

import MainPage from "@pages/MainPage";
import { Header } from "./widgets/Header";
import { Box, CircularProgress } from "@mui/material";

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
const ServicesMF = lazy(() => import("remoteServices/ServicesMF"));

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
							element={
								<ErrorBoundary>
									<Suspense
										fallback={
											<Box
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<CircularProgress />
											</Box>
										}
									>
										<ProgramsMF />
									</Suspense>
								</ErrorBoundary>
							}
						/>
						<Route
							path="/programs:id"
							element={
								<ErrorBoundary>
									<Suspense
										fallback={
											<Box
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<CircularProgress />
											</Box>
										}
									>
										<LazyDetailedProgramPage />
									</Suspense>
								</ErrorBoundary>
							}
						/>
						<Route
							path="/services"
							element={
								<ErrorBoundary>
									<Suspense
										fallback={
											<Box
												sx={{
													display: "flex",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<CircularProgress />
											</Box>
										}
									>
										<ServicesMF />
									</Suspense>
								</ErrorBoundary>
							}
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
