import { getCategories } from "./getCategories";
import { clickRenderModalCar } from "./clickRenderModalCar";

export function renderHeader(totalPrice, totalItems, objProd) {
  localStorage.setItem("totalPrice", totalPrice);
  localStorage.setItem("totalItems", totalItems);

  const header = document.querySelector(".header");

  const buttonBack = document.createElement("button");
  buttonBack.className = "btn btn-outline-danger";
  buttonBack.innerText = "Назад";

  const shoppingCart = document.createElement("div");
  shoppingCart.className = "header__shoppingCart";
  shoppingCart.innerHTML = `
               <svg xmlns="http://www.w3.org/2000/svg" 
                    width="36" 
                    height="36" 
                    fill="currentColor" 
                    class="bi bi-cart" 
                    viewBox="0 0 16 16">
               <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
               </svg>
               
               <span class="header__shoppingItem">${totalPrice} руб ${totalItems} штук</span>`;

  header.innerHTML = "";

  header.appendChild(buttonBack);
  header.appendChild(shoppingCart);

  buttonBack.addEventListener("click", getCategories);

  clickRenderModalCar();
}
