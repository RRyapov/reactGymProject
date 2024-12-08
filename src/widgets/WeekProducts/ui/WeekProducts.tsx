// import { ProductsOnMainPage } from "common";
import { type FC } from "react";
// import { useQueryProductsForMainPage } from "@entities/products/model/services/query";
// import { ProductsForMainPageResponse } from "@entities/products/model/types/types";
// import { ProductCard } from "@entities/products/ui/ProductCard/ProductCard";
import { EndLine } from "@shared/ui/AdditionalElements/EndLine";
import { ProductContainer, ProductsOnMainPage } from "@assets/styles";
import ProductCardLoader from "@shared/ui/Loaders/ProductCardLoader";
import { MainTitle } from "@shared/ui/Typographies";
import {
	ProductCard,
	ProductsForMainPageResponse,
	useQueryProductsForMainPage,
} from "@entities/products";
// import { ProductsForMainPageResponse } from "@entities/products/model/types/types";
// import { useQueryProductsForMainPage } from "@entities/products";

export const WeekProducts: FC = () => {
	const { data: products, isLoading } = useQueryProductsForMainPage();
	return (
		<>
			<ProductsOnMainPage>
				<MainTitle children={"Товары недели"} />
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
