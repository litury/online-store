import { renderCategories } from "./renderCategories";

export async function getCategories() {
  const header = document.querySelector(".header");
  let setCategoriesArray = [];

  header.innerHTML = "";

  await axios
    .get("https://dh.cubicle.53xapps.com/categories")
    .then((response) => {
      setCategoriesArray = response.data;

      renderCategories(setCategoriesArray);
    });
}
