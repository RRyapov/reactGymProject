import { FlexCenter, ProductCardOnMainPage } from "@assets/styles";
import { FC } from "react";
import { Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export const OneProductCardLoader: FC = () => {
	return (
		<ProductCardOnMainPage>
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
		</ProductCardOnMainPage>
	);
};
