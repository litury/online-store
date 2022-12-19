import { getProducts } from "./getProducts";

export function clickGetProductsId() {
  // ищем категории
  const categoryLink = document.querySelectorAll(".category__link");

  categoryLink.forEach((e) =>
    e.addEventListener("click", function () {
      const categoryId = e.dataset.id;

      getProducts(categoryId);
    })
  );
}
