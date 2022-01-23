const profileEditButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close-button')
const popupContainer = document.querySelector('.popup__container')

function openPopup(event) {
    popup.classList.add('popup_opened')
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

function backgroundClick(event) {
    if (event.target === event.currentTarget) {
        closePopup()
    }
}
profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popup.addEventListener('click', backgroundClick);