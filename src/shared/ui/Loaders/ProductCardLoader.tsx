import { ProductCardLoaderContainer } from "@assets/styles";

import { FC } from "react";
import { OneProductCardLoader } from "./OneProductCardLoader";

export const ProductCardLoader: FC = () => {
	return (
		<ProductCardLoaderContainer>
			<OneProductCardLoader />
			<OneProductCardLoader />
			<OneProductCardLoader />
		</ProductCardLoaderContainer>
	);
};

export default ProductCardLoader;
