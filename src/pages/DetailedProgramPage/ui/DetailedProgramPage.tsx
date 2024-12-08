import { useState, type FC } from "react";
import { useParams } from "react-router-dom";
// import { useQueryPrograms } from "@entities/trainingProgram/model/services/query";
import { BuyItemLinks, BuyItemType } from "@shared/types/types";
// import { BuyItemFrame } from "@shared/ui/buyItemFrame/BuyItemFrame";
import { ProgramType, useQueryPrograms } from "@entities/trainingProgram";
import { BuyItemFrame } from "@shared/ui/BuyItemFrame";
// import { BuyItemFrame } from "@shared/ui/BuyItemFrame";

export const DetailedProgramPage: FC = () => {
	const { data: requestedPrograms, isLoading, isError } = useQueryPrograms();
	const { id } = useParams();
	const [activeModal, setActiveModal] = useState(false);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error loading programs</div>;
	}

	const programList = requestedPrograms?.[0]?.programs || [];
	const programInfo: Partial<ProgramType> = programList[Number(id)] || {};

	console.log("programInfo: ", programInfo);

	if (!programInfo) return <></>;

	const { imageUrl, name, longText, price } = programInfo;
	const itemType = BuyItemType.program;
	const itemBackLink = BuyItemLinks.programs;
	return (
		<>
			{requestedPrograms[0].programs.map((item) => (
				<BuyItemFrame
					itemType={itemType}
					title={name}
					longText={longText}
					price={`${price} руб.`}
					imageUrl={imageUrl}
					activeModal={activeModal}
					setActiveModal={setActiveModal}
					backLink={`/${itemBackLink}`}
				/>
			))}
		</>
	);
};

// export default DetailedProgramPage;
