import { filterCategoryProducts } from "./filterCategoryProducts";

export async function getProducts(categoryId) {
  let setProductsArray = [];

  await axios
    .get("https://dh.cubicle.53xapps.com/products")
    .then((response) => {
      setProductsArray = response.data;

      filterCategoryProducts(setProductsArray, categoryId);
    });
}
