export function renderModalCar(objCar) {
  let objCarString = JSON.stringify(objCar);
  localStorage.setItem("objCar", objCarString);

  const fragment = document.createDocumentFragment();

  let modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = " ";

  for (let product in objCar) {
    const block = document.createElement("div");
    block.className = "wrapper";

    if (Object.keys(objCar).length === 0) {
      modalBody.innerHTML = "Корзина пуста!";
    }

    block.innerHTML = `

    <div class="block1 card col" data-idd="${objCar[product].id}">
	   <img src=${
       typeof objCar[product].photo == "object"
         ? objCar[product].photo.front
         : objCar[product].photo
     }
	        class="product-img rounded" 
	        alt="картинка">

	     <div class="card-body">
		   <h5 class="card-title">
			   ${objCar[product].title}
		   </h5>
		   <p class="card-text">
		   <i class="bi bi-arrow-through-heart-fill"></i>
            ${
              typeof objCar[product].description == "object"
                ? objCar[product].description.camera
                : objCar[product].description === " "
                ? "ПУСТОТА"
                : objCar[product].description
            }
		    </p>

			<p class="card__price">
			<i class="bi bi-tag"></i>
			Колличество ${objCar[product].count}
			</p>
		    </div>

    </div>`;

    fragment.appendChild(block);
  }

  modalBody.append(fragment);
  console.log(objCar);
}
