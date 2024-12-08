import { MoreInfo } from "@widgets/MoreInfo/ui/MoreInfo";
import { TrainerAdvice } from "@widgets/TrainerAdvice/ui/TrainerAdvice";
import { WeekProducts } from "@widgets/WeekProducts/ui/WeekProducts";
import { type FC } from "react";

export const MainPage: FC = () => {
	return (
		<>
			<WeekProducts />
			<TrainerAdvice />
			<MoreInfo />
		</>
	);
};
