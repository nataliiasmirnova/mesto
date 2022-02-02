//открытие и закрытие попапа//
const profileEditButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close-button')
const popupContainer = document.querySelector('.popup__container')

const nameInput = document.getElementById('field-name');
const professionInput = document.getElementById('field-profession');

const nameOutput = document.querySelector('.profile__name');
const professionOutput = document.querySelector('.profile__profession');

//открытие попап//
function openPopup(event) {
    /*event.preventDefault()*/
    popup.classList.add('popup_opened')
}

//закрытие попап через кнопку закрытия//
function closePopup() {
    popup.classList.remove('popup_opened')
}

/*//закрытие поап через клик вне зоны поап//
function backgroundClick(event) {
    if (event.target === event.currentTarget) {
        closePopup()
    }
}*/

//автозаполнение поапа данными из профиля//
function openEditPopup(event) {
    openPopup(event);
    nameInput.value = nameOutput.textContent;
    professionInput.value = professionOutput.textContent;
}

//редактирование и сохранение инфо в профиле//
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameOutput.textContent = nameInput.value;
    professionOutput.textContent = professionInput.value;
    closePopup()
}

profileEditButton.addEventListener('click', openEditPopup);
popupCloseButton.addEventListener('click', closePopup);
popupContainer.addEventListener('submit', formSubmitHandler);
/*popup.addEventListener('click', backgroundClick);*/
