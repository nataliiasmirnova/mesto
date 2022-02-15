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

//кнопка добавления карточки
const popupAddCardCreateButton = document.querySelector('.popup__save-button_place');






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

function addCard() {
    /*const newCard = template.cloneNode(true);
    const placeName = document.getElementById('field-place');
    const placeLink = document.getElementById('field-link');
    newCard.querySelector('.photo-grid__card-title').innerText = placeName.value;
    newCard.querySelector('.photo-grid__image').src = placeLink.value;
    newCard.querySelector('.photo-grid__image').alt = placeName.value;
    list.appendChild(newCard);*/
    const placeName = document.getElementById('field-place');
    const placeLink = document.getElementById('field-link');
    const newCard = {
        name: placeName.value,
        link: placeLink.value
    }
    console.log(newCard);
    renderCard(newCard);
}

profileEditButton.addEventListener('click', openEditPopup);
popupCloseButton.addEventListener('click', closePopup);
popupContainer.addEventListener('submit', formSubmitHandler);
/*popup.addEventListener('click', backgroundClick);*/

cardAddButton.addEventListener('click', openAddCardPopup);
popupAddCardCloseButton.addEventListener('click', closeAddCardPopup);
popupAddCardCreateButton.addEventListener('click', addCard);





//рендеринг массива карточек
function render() {
    gridCards.forEach(renderCard);
}

//рендеринг массива карточек, стрелочная запись?
//gridCards.forEach(element => renderCard);

//создание одной карточки
function renderCard(card) {
    const newCard = template.cloneNode(true);
    newCard.querySelector('.photo-grid__card-title').innerText = card.name;
    newCard.querySelector('.photo-grid__image').src = card.link;
    newCard.querySelector('.photo-grid__image').alt = card.name;

    //addListeners(newCard)
    const likeCard = newCard.querySelector('.photo-grid__like-button');
    likeCard.addEventListener('click', () => {
        likeCard.classList.toggle('photo-grid__like-button_active');
    });

    const trashButton = newCard.querySelector('.photo-grid__trash-button');
    trashButton.addEventListener('click', deleteCard);

    function deleteCard(click) {
        click.target.closest('.photo-grid__card').remove();
    }

    list.appendChild(newCard);
}

render();




//вывод в консоль элементов присоединенного массива//
//gridCards.forEach(element => console.log(element));
