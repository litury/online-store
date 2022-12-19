import { renderHeader } from "./renderHeader";
import { renderModalCar } from "./renderModalCar";

export function btnEditProduct(
  buttonAddProduct,
  buttonDellProduct,
  totalPrice,
  totalItems,
  objProd
) {
  let objCar = JSON.parse(localStorage.getItem("objCar")) || {};

  buttonAddProduct.forEach((el) => {
    el.addEventListener("click", (event) => {
      let id = event.target.getAttribute("data-id");
      let price = +event.target.getAttribute("data-price");
      let itemId = objProd[id].id;

      totalPrice += price;

      totalItems++;

      objProd[id].count += 1;

      objCar[itemId] = objProd[id];

      renderHeader(totalPrice, totalItems, objProd, objCar);
      renderModalCar(objCar);
    });
  });

  buttonDellProduct.forEach((el) => {
    el.addEventListener("click", (event) => {
      let id = event.target.getAttribute("data-id");
      let price = +event.target.getAttribute("data-price");
      let itemId = objProd[id].id;

      if (objCar[itemId].count >= 1) {
        totalPrice -= price;
        totalItems--;
        objProd[id].count -= 1;

        if (objCar[itemId].count === 0) {
          delete objCar[itemId];
          console.log(objCar[itemId]);
        }
      }

      renderHeader(totalPrice, totalItems, objProd, objCar);
      renderModalCar(objCar);
    });
  });
}
