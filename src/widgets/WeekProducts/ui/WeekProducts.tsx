import { type FC } from "react";

import { EndLine } from "@shared/ui/AdditionalElements/EndLine";
import { ProductContainer, ProductsOnMainPage } from "@assets/styles";
import ProductCardLoader from "@shared/ui/Loaders/ProductCardLoader";
import { MainTitle } from "@shared/ui/Typographies";
import {
	ProductCard,
	ProductsForMainPageResponse,
	useQueryProductsForMainPage,
} from "@entities/products";

export const WeekProducts: FC = () => {
	const { data: products, isLoading } = useQueryProductsForMainPage();
	return (
		<>
			<ProductsOnMainPage>
				<MainTitle content="Товары недели" />
				{isLoading && <ProductCardLoader />}

				{products && (
					<ProductContainer>
						{products[0].productsForMainPage.map(
							(item: ProductsForMainPageResponse) => (
								<ProductCard
									imageUrl={item.imageUrl}
									imageAlt={item.imageAlt}
									titleText={item.productName}
								/>
							)
						)}
					</ProductContainer>
				)}
			</ProductsOnMainPage>
			<EndLine />
		</>
	);
};

export default WeekProducts;
