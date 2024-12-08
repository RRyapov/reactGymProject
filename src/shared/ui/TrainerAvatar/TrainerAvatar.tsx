import { Box, styled } from "@mui/material";
import { FC } from "react";

const AvatarStyle = styled(Box)({
	margin: "45px",
	marginBottom: "30px",
	boxShadow: "0px 0px 66px 11px rgba(46, 175, 255, 0.9)",
	borderRadius: "47%",
});

export const TrainerAvatar: FC = () => {
	return (
		<AvatarStyle>
			<img
				src="https://i.postimg.cc/13YSb2F6/trainer-1.png"
				alt="trainer-1"
			/>
		</AvatarStyle>
	);
};

export default TrainerAvatar;
