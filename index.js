//открытие и закрытие попапа//
const profileEditButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close-button')
const popupContainer = document.querySelector('.popup__container')

const nameInput = document.getElementById('field-name');
const professionInput = document.getElementById('field-profession');

const nameOutput = document.querySelector('.profile__name');
const professionOutput = document.querySelector('.profile__profession');

function openPopup(event) {
    event.preventDefault()
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

function openEditPopup(event) {
    openPopup(event);
    nameInput.value = nameOutput.textContent;
    professionInput.value = professionOutput.textContent;
}

profileEditButton.addEventListener('click', openEditPopup);
popupCloseButton.addEventListener('click', closePopup);
popup.addEventListener('click', backgroundClick);
popupContainer.addEventListener('submit', formSubmitHandler);


//редактирование инфо в профиле//

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameOutput.textContent = nameInput.value;
    professionOutput.textContent = professionInput.value;
    closePopup()
}