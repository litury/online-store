import { renderProducts } from "./renderProducts";

export function filterCategoryProducts(products, categoryId) {
  const filterCategory = products.filter((product) => {
    return product.category_id == categoryId;
  });

  renderProducts(filterCategory);
}
