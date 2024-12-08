import { type FC } from "react";
import { EndLine } from "@shared/ui/AdditionalElements/EndLine";
import TrainerAvatar from "@shared/ui/TrainerAvatar/TrainerAvatar";
// import { GeneralButton } from "@shared/ui/buttons/buttons";
import { GeneralButton, StyledContainer } from "@assets/styles";
import { MainTitle } from "@shared/ui/Typographies";
import { ArticleText, MediumTitle } from "@shared/ui/Typographies/Typographies";

export const TrainerAdvice: FC = () => {
	return (
		<StyledContainer>
			<MainTitle children={"Совет тренера"} />

			<ArticleText
				children={
					"Люди думают, что знаменитости проводят в спортзале по полдня, поэтому так хорошо и выглядят. Но это не так: у большинства селебрити есть максимум час на тренировку. Дело не в том, как долго вы работаете, а в том, насколько усердно. Своим подопечным я рекомендую интервальные тренировки, например, по такой схеме: 15 секунд отжиманий, 10 секунд отдыха, 15 секунд выпадов, 10 секунд отдыха, 15 секунд бега с высоким подъемом коленей, 10 секунд отдыха, 15 секунд прыжков из стороны в стороны, 10 секунд отдыха». Если выполнить несколько таких «кругов» подряд, то даже получасовая тренировка будет весьма эффективной"
				}
			/>

			<TrainerAvatar />
			<MediumTitle children={"Алексей"} />

			<GeneralButton children={"Подробнее"} />
			<EndLine />
		</StyledContainer>
	);
};

export default TrainerAdvice;
