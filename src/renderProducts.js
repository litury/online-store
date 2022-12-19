import { renderHeader } from "./renderHeader";
import { btnEditProduct } from "./btnEditProduct";

export function renderProducts(productsArray) {
  let objProd = {};

  let totalPrice = +localStorage.getItem("totalPrice") || 0;
  let totalItems = localStorage.getItem("totalItems") || 0;

  for (let product of productsArray) {
    objProd[product.id] = { ...product, count: 0 };
  }

  const blocks = document.querySelector(".blocks");
  const fragment = document.createDocumentFragment();

  renderHeader(totalPrice, totalItems, objProd);

  blocks.innerHTML = "";

  for (let productId in objProd) {
    const block = document.createElement("div");
    block.innerHTML = `
     <div class="block card col">
	   <img src=${
       typeof objProd[productId].photo == "object"
         ? objProd[productId].photo.front
         : objProd[productId].photo
     }
	        class="product-img rounded" 
	        alt="картинка">
	     <div class="card-body">
		   <h5 class="card-title">
			   ${objProd[productId].title}
		   </h5>
		   <p class="card-text">
		   <i class="bi bi-arrow-through-heart-fill"></i>
            ${
              typeof objProd[productId].description == "object"
                ? objProd[productId].description.camera
                : objProd[productId].description === " "
                ? "ПУСТОТА"
                : objProd[productId].description
            }
		    </p>
			<p class="card__price">
			<i class="bi bi-tag"></i>
			 ${objProd[productId].price}
			</p>
		    </div>	    
	    <div class="card-footer">
			    <button class="btn btn-primary" 
			            id="buttonAddProduct" 
			            data-name="${objProd[productId].title}" 
			            data-price="${objProd[productId].price}"
			            data-id="${objProd[productId].id}">
				    Добавить в корзину
			    </button>
			    
			     <button class="btn btn-primary" 
			             id="buttonDellProduct" 
			             data-name="${objProd[productId].title}" 
			             data-price="${objProd[productId].price}"
			             data-id="${objProd[productId].id}">
				    Удалить из корзины
			    </button>
		    </div>
    </div>`;

    fragment.appendChild(block);
  }
  blocks.appendChild(fragment);

  let buttonAddProduct = document.querySelectorAll("#buttonAddProduct");
  let buttonDellProduct = document.querySelectorAll("#buttonDellProduct");

  btnEditProduct(
    buttonAddProduct,
    buttonDellProduct,
    totalPrice,
    totalItems,
    objProd
  );
}
