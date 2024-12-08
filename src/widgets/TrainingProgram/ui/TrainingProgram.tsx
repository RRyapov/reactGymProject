import { type FC } from "react";
import {
	ITrainingProgram,
	trainingProgramPosition,
} from "@entities/trainingProgram/model/types/types";
import { BuyItemGeneralDescription } from "@entities/trainingProgram/ui/BuyItemGeneralDescription";
import { BuyItemImage } from "@entities/trainingProgram/ui/BuyItemImage";
import { ProgramBlock } from "@assets/styles";

export const TrainingProgram: FC<ITrainingProgram> = (props) => {
	return (
		<ProgramBlock>
			{props.position === trainingProgramPosition.right && (
				<>
					<BuyItemGeneralDescription {...props} />
					<BuyItemImage {...props} />
				</>
			)}
			{props.position === trainingProgramPosition.left && (
				<>
					<BuyItemImage {...props} />
					<BuyItemGeneralDescription {...props} />
				</>
			)}
		</ProgramBlock>
	);
};
