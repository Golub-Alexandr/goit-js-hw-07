// Import gallery items
import { galleryItems } from './gallery-items.js';

// Select gallery container element and create gallery HTML
const galleryContainerEl = document.querySelector('.gallery');
const galleryHTML = createGalleryHTML(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', galleryHTML);

// Function to create gallery HTML from items
function createGalleryHTML(items) {
	return items.map(({ preview, original, description }) => {
   return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
         </a>
      </div>
   `;
	}).join('');
}

// Function to handle container click event
const onContainerClick = (e) => {
	e.preventDefault();

  // Get the source URL of the clicked image
const source = e.target.dataset.source;
   if (!source) return;

  // Create and show a lightbox with the clicked image
const instance = basicLightbox.create(`
   <img src="${source}" width="800" height="600">
   `);
   instance.show();
};

// Add click event listener to gallery container
galleryContainerEl.addEventListener('click', onContainerClick);
