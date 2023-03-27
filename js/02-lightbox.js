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
      </a>
    </div>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", gallery);

//galleryList.onclick = (event) => {
 //   event.preventDefault();
 //   new SimpleLightbox(".galleryList", SimpleLightbox.open(`<img src="${event.target.dataset.source}" width="1400" height="900">`)
 //   )
 // 
//}


//const galleryL = new SimpleLightbox(".gallery");
//galleryD.on("show.simplelightbox", function (ev) {
//ev.preventDefault();
//});

const lightbox = new SimpleLightbox('.galleryList');
//ev.preventDefault();
 //SimpleLightbox(`<img src="${ev.target.dataset.source}" width="1200" height="800">`);

//});

//galleryList.onclick = (event) => {
 // event.preventDefault();
 // basicLightbox
 //   .create(
  //    `
 //   <img src="${event.target.dataset.source}" width="1200" height="800">`
  //  )
  //  .show();
//};