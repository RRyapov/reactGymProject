import { FlexCenter, TextShadow } from "@assets/styles";
import styled from "@emotion/styled";
import { Typography, Box, SxProps, Theme } from "@mui/material";
import { FC } from "react";
// import { FlexCenter, TextShadow } from "../styles/styles";

type TitleProps = {
	children: React.ReactNode;
	sx?: SxProps<Theme> | undefined;
};

const TitleContainerStyle = {
	width: "100%",
	height: "fit-content",
	marginTop: "10px",
	transition: "all 1s ease-in-out",
	textAlign: "center",
};

const TitleContainer = styled(Box)({
	...FlexCenter,
	width: "100%",
	height: "fit-content",
	// marginTop: "10px",
	transition: "all 1s ease-in-out",
	textAlign: "center",
});

const PriceTextContainer = styled(Box)({
	...FlexCenter,
	width: "100%",
	height: "fit-content",
	transition: "all 1s ease-in-out",
	textAlign: "center",
	marginTop: "20px",
	marginBottom: "20px",
});

const LastWordContainer = styled(Box)({
	display: "flex",
	justifyContent: "end",
	width: "100%",
	height: "fit-content",
	marginTop: "15px",
	marginBottom: "25px",
});

const ProgramShortReadContainer = styled(Box)({
	marginBottom: "35px",
	marginTop: "45px",
});

const ProgramLongReadContainer = styled(Box)({
	maxWidth: "750px",
	width: "fit-content",
	marginBottom: "35px",
});

const MainTitleTypography = styled(Typography)({
	fontFamily: '"Anton", sans-serif',
	fontWeight: 700,
	fontStyle: "normal",
	fontSize: "14mm",
	color: "#1dd6ff",
	...TextShadow,
});

const MediumTitleTypography = styled(Typography)({
	...TextShadow,
	fontFamily: '"Arial", cursive',
	fontWeight: 400,
	fontSize: "11mm",
	fontStyle: "italic",

	color: "#37dbff",
	marginBottom: "25px",

	textAlign: "center",
	lineHeight: "50px",
});

const ArticleTextTypography = styled(Typography)({
	...FlexCenter,
	...TextShadow,
	fontFamily: '"Arial", cursive',
	fontWeight: 400,
	fontSize: "8mm",
	fontStyle: "italic",

	color: "#ffffff",

	textAlign: "center",
	lineHeight: "50px",
});

const ArticleTitleTextTypography = {
	marginTop: "20px",

	fontFamily: '"Arial", sans-serif',
	fonWeight: 700,
	fontStyle: "italic",
	fontSize: "13mm",

	color: "aliceblue",

	transition: "all 0.5s ease-in-out",

	"&:hover": {
		cursor: "pointer",
	},

	"&:active": {
		transform: "scale(0.975)",
		transition: "none",
	},
};

const BuyItemLongReadTypography = styled(Typography)({
	...FlexCenter,
	...TextShadow,
	...ArticleTitleTextTypography,
	// width: "750px",
	fontSize: "8mm",
	// marginLeft: "25px",
	marginBottom: "-70px",
	marginTop: "20px",
	textAlign: "center",
});

const ArticleTitleTypography = styled(Typography)({
	...FlexCenter,
	...TextShadow,
	...ArticleTitleTextTypography,
});

export const MainTitle: FC<TitleProps> = ({ children }) => (
	<TitleContainer>
		<MainTitleTypography>{children}</MainTitleTypography>
	</TitleContainer>
);

export const MediumTitle: FC<TitleProps> = ({ children }) => (
	<TitleContainer>
		<MediumTitleTypography>{children}</MediumTitleTypography>
	</TitleContainer>
);

export const ArticleText: FC<TitleProps> = ({ children }) => (
	<TitleContainer>
		<ArticleTextTypography>{children}</ArticleTextTypography>
	</TitleContainer>
);

export const LastWordText: FC<TitleProps> = ({ children }) => (
	<LastWordContainer>
		<ArticleTextTypography>{children}</ArticleTextTypography>
	</LastWordContainer>
);

export const ArticleTitle: FC<TitleProps> = ({ children }) => (
	<TitleContainer>
		<ArticleTitleTypography>{children}</ArticleTitleTypography>
	</TitleContainer>
);

export const PriceText: FC<TitleProps> = ({ children }) => (
	<PriceTextContainer>
		<ArticleTitleTypography>{children}</ArticleTitleTypography>
	</PriceTextContainer>
);

export const BuyItemDescriptionShortRead: FC<TitleProps> = ({ children }) => (
	<ProgramShortReadContainer>
		<ArticleTextTypography>{children}</ArticleTextTypography>
	</ProgramShortReadContainer>
);

export const BuyItemDescriptionLongRead: FC<TitleProps> = ({ children }) => (
	<ProgramLongReadContainer>
		<BuyItemLongReadTypography>{children}</BuyItemLongReadTypography>
	</ProgramLongReadContainer>
);
