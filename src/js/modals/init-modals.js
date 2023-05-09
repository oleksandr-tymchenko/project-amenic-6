import { refs } from '../constants.js';
import { openModal } from './open-close-modals';
import { onWatchTrailerClick } from '../watch-trailer';

async function initModals() {
  try {
    // add an event listener to open the modals
    //example
    //refs.watchTrailerBtn.addEventListener('click', () => openModal(refs.modalTrailer));
    // refs.popupBtn.addEventListener('click', () => openModal(refs.modalPopup));

  const currentPage = window.location.pathname;

  // Check if the event occurred on the homepage
  if ((currentPage === '/') || (currentPage === '/index.html')) {
    refs.watchTrailerBtn.addEventListener('click', () => onWatchTrailerClick(493529));
  }

  // Check if the event occurred on the Catalog page
  if (currentPage === '/catalog.html') {
    refs.watchTrailerBtn.addEventListener('click', () => onWatchTrailerClick(493529));
  }

  // Check if the event occurred on the My Library page
  if (currentPage === '/library.html') {
    refs.cards.addEventListener('click', openModal(refs.modalPopUp));
  }



    
  } catch (error) {
    console.log(error);
  }
}

export default initModals;
