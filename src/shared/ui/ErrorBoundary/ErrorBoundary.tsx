import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				this.props.fallback || (
					<div style={{ padding: "20px", textAlign: "center" }}>
						<h2>Что-то пошло не так при загрузке компонента</h2>
						<p>Попробуйте обновить страницу или вернуться позже</p>
						<button onClick={() => window.location.reload()}>
							Обновить страницу
						</button>
					</div>
				)
			);
		}

		return this.props.children;
	}
}
