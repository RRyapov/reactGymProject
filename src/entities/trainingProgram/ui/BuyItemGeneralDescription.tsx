import { type FC } from "react";
import { Link } from "react-router-dom";

// import { GeneralButton } from "@shared/ui/buttons/buttons";
import { BuyItemDescription, GeneralButton } from "@assets/styles";
import { MainTitle } from "@shared/ui/Typographies";
import { BuyItemDescriptionShortRead } from "@shared/ui/Typographies/Typographies";
import { ITrainingProgram } from "../model/types/types";

export const BuyItemGeneralDescription: FC<Partial<ITrainingProgram>> = ({
	id,
	name,
	shortText,
	onLearnMore,
}) => (
	<BuyItemDescription>
		<MainTitle children={name} />
		<BuyItemDescriptionShortRead children={shortText} />
		<Link to={`/program/${id}`}>
			<GeneralButton
				onClick={onLearnMore}
				children={"Подробнее"}
			/>
		</Link>
	</BuyItemDescription>
);
