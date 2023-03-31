import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const marcupGallery = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
<a class="gallery__link" href='${original}'>
  <img
    class="gallery__image qwer"
    src='${preview}'
    data-source='${original}'
    alt='${description}'
  />
</a>
</li>`).join('');

gallery.insertAdjacentHTML('beforeend', marcupGallery);
gallery.addEventListener('click', onImageClick);

let modal;

function onImageClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains('gallery__image')) {
        return;        
    }

    const imgLink = evt.target.dataset.source;
    modal = basicLightbox.create(`<img src="${imgLink}">`);
    modal.show();

    document.addEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(evt) {
    if (evt.code !== "Escape") {
        return;
    }

    modal.close();
    document.removeEventListener('keydown', onEscKeyPress);
    
}

