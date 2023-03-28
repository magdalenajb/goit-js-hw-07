import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");

const gallery = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image"
          src="${item.preview}" alt="${item.description}"/>
      </a>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", gallery);

let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});







