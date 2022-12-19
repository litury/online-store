import { clickGetProductsId } from "./clickGetProductsId";

export function renderCategories(setCategoriesArray) {
  const blocks = document.querySelector(".blocks");

  const categoryList = document.createElement("ul");
  const fragment = document.createDocumentFragment();

  blocks.innerHTML = "";

  categoryList.className = "category";
  blocks.prepend(categoryList);

  for (let category of setCategoriesArray) {
    const categoryItem = document.createElement("li");
    categoryItem.className = "category__item";
    categoryItem.innerHTML = `      
                <a class="category__link" 
                   href="#" 
                   data-id=${category.id}>
                   <img class="category__img"
                     src=${category.photo}>
                     <span>${category.title}</span>
                </a>`;

    fragment.appendChild(categoryItem);
  }
  categoryList.appendChild(fragment);

  clickGetProductsId();
}
