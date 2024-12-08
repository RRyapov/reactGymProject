import { type FC } from "react";
import { GeneralButton, StyledContainer } from "@assets/styles";
import { ArticleTitle, MainTitle } from "@shared/ui/Typographies";

export const MoreInfo: FC = () => {
	return (
		<StyledContainer>
			<MainTitle children={"Узнай больше"} />
			<StyledContainer
				sx={{ margin: "unset !important", marginBottom: "35px !important" }}
			>
				<ArticleTitle
					children={"Как тренироваться на развитие максимальной силы?"}
				/>
				<ArticleTitle
					children={"Асимметрия мышц - что это и как с этим бороться?"}
				/>
				<ArticleTitle
					children={"Первая помощь при растяжениях мышц и связок"}
				/>
			</StyledContainer>

			<GeneralButton children={"Подробнее"} />
		</StyledContainer>
	);
};

export default MoreInfo;
