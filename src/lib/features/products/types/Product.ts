import type {ProductIngredient} from "./ProductIngredient.js";
import type {ProductBrand} from "$lib/features/product_brands/types/ProductBrand.js";
import type {ProductCategory} from "./ProductCategory.js";
import type {ProductOffer} from "../../product_offers/types/ProductOffer.js";

export type Product = {
	/**
	 * The product's id in UUID format.
	 * @example "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"
	 */
	id: string;

	/**
	 * The product's name if it's known, null otherwise.
	 * @example "CLARESA TRUE GLUE"
	 * @example null
	 */
	name: string | null;

	/**
	 * The product's slug. Use it in the links but use the `id` for API requests.
	 * @example "claresa-true-glue"
	 */
	slug: string;

	/**
	 * The product's mass in killograms if it's known, null otherwise.
	 * @example 0.4
	 * @example null
	 */
	mass: number | null;

	/**
	 * The product's volume in liters if it's known, null otherwise.
	 * @example 0.4
	 * @example null
	 */
	volume: number | null;

	/**
	 * The product's categories.
	 */
	categories: ProductCategory[];

	brand: ProductBrand;

	offers: Omit<ProductOffer, "product">[];

	ingredients: ProductIngredient[] | null;
};
