// Import gallery items from external file
import { galleryItems } from './gallery-items.js';

// Select the gallery container and create the gallery HTML markup
const galleryContainerEl = document.querySelector('.gallery');
const imagesEl = createGalleryImg(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', imagesEl);

// Function to create the gallery HTML markup
function createGalleryImg(items) {
// Map through each gallery item and create HTML markup for each one
	return items.map(({ preview, original, description }) => {
   	return `
   		<ul class="gallery">
      		<li>
         		<a class="gallery__item" href="${original}">
            		<img class="gallery__image" src="${preview}" alt="${description}" />
         		</a>
      		</li>
   		</ul>
		`;
	}).join('');
}

// Initialize SimpleLightbox plugin with gallery links
const lightbox = new SimpleLightbox('.gallery a', {
	captionsData: "alt",
	captionDelay: 250,
	captionType: "alt",
});
