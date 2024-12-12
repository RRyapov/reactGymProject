import { type FC } from "react";
import { StyledContainer } from "@assets/styles";
import { ArticleTitle, MainTitle } from "@shared/ui/Typographies";
import { Button } from "@shared/ui/Button";

export const MoreInfo: FC = () => {
	return (
		<StyledContainer>
			<MainTitle content="Узнай больше" />
			<StyledContainer
				sx={{ margin: "unset !important", marginBottom: "35px !important" }}
			>
				<ArticleTitle content="Как тренироваться на развитие максимальной силы?" />
				<ArticleTitle content="Асимметрия мышц - что это и как с этим бороться?" />
				<ArticleTitle content="Первая помощь при растяжениях мышц и связок" />
			</StyledContainer>
			<Button title="Подробнее" />
		</StyledContainer>
	);
};

export default MoreInfo;
