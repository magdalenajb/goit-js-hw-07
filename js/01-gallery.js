import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const gallery = galleryItems.map((item) => 
    `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image"
          src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
      </a>
    </div>`
).join("");

galleryList.insertAdjacentHTML("afterbegin", gallery);

galleryList.onclick = (event) => {
    event.preventDefault();
    basicLightbox
      .create(`
    <img src="${event.target.dataset.source}" width="1400" height="900">`).show();
}

