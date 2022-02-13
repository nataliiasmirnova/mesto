//переменные//
const profileEditButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close-button')
const popupContainer = document.querySelector('.popup__container')

const nameInput = document.getElementById('field-name');
const professionInput = document.getElementById('field-profession');

const nameOutput = document.querySelector('.profile__name');
const professionOutput = document.querySelector('.profile__profession');

//шаблон карточки
const template = document.querySelector('.card_template').content;
//список карочек как переменная
const list = document.querySelector('.photo-grid__list');

//попап добавления карточки
const popupAddPlace = document.querySelector('.popup_add-place');
//кнопка добавления карточки
const cardAddButton = document.querySelector('.profile__add-button');
//кнопка закрытия поапа добавления карточки
const popupAddCardCloseButton = document.querySelector('.popup__close-button_place');


//const input = document.querySelector('.form__input');
//const button = document.querySelector('.form__submit');


//открытие попапа//
function openPopup(event) {
    /*event.preventDefault()*/
    popup.classList.add('popup_opened')
}

//закрытие попапа через кнопку закрытия//
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


//открытие попапа добавления карточки
function openAddCardPopup() {
    popupAddPlace.classList.add('popup_opened')
}

//закрытие попапа добавления карточки
function closeAddCardPopup() {
    popupAddPlace.classList.remove('popup_opened')
}


profileEditButton.addEventListener('click', openEditPopup);
popupCloseButton.addEventListener('click', closePopup);
popupContainer.addEventListener('submit', formSubmitHandler);
/*popup.addEventListener('click', backgroundClick);*/

cardAddButton.addEventListener('click', openAddCardPopup);
popupAddCardCloseButton.addEventListener('click', closeAddCardPopup);








//рендеринг массива карточек
function render() {
    gridCards.forEach(renderCard);
}

//рендеринг массива карточек, стрелочная запись?
//gridCards.forEach(element => renderCard);

//создание одной карточки
function renderCard(Card) {
    const newCard = template.cloneNode(true);
    newCard.querySelector('.photo-grid__card-title').innerText = Card.name;
    newCard.querySelector('.photo-grid__image').src = Card.link;
    newCard.querySelector('.photo-grid__image').alt = Card.alt;

    //addListeners(newCard)
    list.appendChild(newCard);
}

render();







//вывод в консоль элементов присоединенного массива//
//gridCards.forEach(element => console.log(element));
