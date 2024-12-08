import { FlexCenter, ProductCardOnMainPage } from "@assets/styles";
import { Box, Container, styled } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { FC } from "react";

const ProductCardLoaderSkeleton = () => (
	<Stack
		sx={{ margin: "0px 55px !important" }}
		spacing={5}
	>
		<Skeleton
			sx={{ backgroundColor: "#2fb3ff !important" }}
			variant="circular"
			width={320}
			height={320}
		/>
		<Skeleton
			sx={{ backgroundColor: "#2fb3ff !important", borderRadius: "25px" }}
			variant="rectangular"
			width={320}
			height={40}
		/>
		<Box sx={{ ...FlexCenter }}>
			<Skeleton
				sx={{ backgroundColor: "#2fb3ff !important", borderRadius: "25px" }}
				variant="rectangular"
				width={100}
				height={40}
			/>
		</Box>
	</Stack>
);

// const ProductCardOnMainPage = styled(Box)({
// 	...FlexCenter,
// 	flexDirection: "column",
// 	justifyContent: "space-between !important",
// });

export const OneProductCardLoader: FC = () => {
	return (
		<ProductCardOnMainPage>
			<ProductCardLoaderSkeleton />
		</ProductCardOnMainPage>
	);
};

export const ProductCardLoader: FC = () => {
	return (
		<Container
			sx={{
				margin: "25px 0px !important",
				flexDirection: "row !important",
				...FlexCenter,
				justifyContent: "space-between",
			}}
		>
			<OneProductCardLoader />
			<OneProductCardLoader />
			<OneProductCardLoader />
		</Container>
	);
};

export default ProductCardLoader;
