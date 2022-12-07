// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryList = document.querySelector('.gallery')

const cardsMarkup = galleryItems
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>
        `
    })
    .join('');


galleryList.insertAdjacentHTML('afterbegin', cardsMarkup)
galleryList.addEventListener('click', onGalleryListClick)


function onGalleryListClick(e) {
    e.preventDefault()

    if (!e.target.classList.contains('gallery__image')) return;
    imageModalClick();

}

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});


//     const url = getOriginalImgUrl(e); 
//     instance = createModal(url);

//     instance.show(window.addEventListener('keydown', onEscClick))

// };

// function getOriginalImgUrl(e) {
//     return e.target.dataset.source;
// };

// function createModal(url) {
//     return basicLightbox.create(
//         `<img src="${url}">`, {
//             onClose: () => {
//                 window.removeEventListener('keydown', onEscClick);
//             }
//         }
//     );
// };


// function onEscClick(e) {
//     if (e.code === 'Escape') {
//         instance.close();
//     }
// };