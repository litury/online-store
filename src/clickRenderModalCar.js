import { renderModalCar } from "./renderModalCar";

export function clickRenderModalCar() {
  // показать корзину
  const btn = document.querySelector(".header__shoppingCart");
  const modal = new bootstrap.Modal(document.querySelector("#modal"));

  btn.addEventListener("click", function () {
    // открываем модальное окно
    modal.show();

    let objCar = JSON.parse(localStorage.getItem("objCar")) || {};
    renderModalCar(objCar);
  });
}
