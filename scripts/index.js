const profileEditButton = document.querySelector('.profile__edit-button')
const popup = document.querySelector('.popup')
const popupCloseButton = document.querySelector('.popup__close-button')
const popupContainer = document.querySelector('.popup__container')

const nameInput = document.getElementById('field-name');
const professionInput = document.getElementById('field-profession');

const nameOutput = document.querySelector('.profile__name');
const professionOutput = document.querySelector('.profile__profession');

//переменные для работы с template
const template = document.querySelector('.card_template').content;
const list = document.querySelector('.photo-grid__list');

//переменные для работы с добавлением и открытием карточки
const popupAddPlace = document.querySelector('.popup_add-place');
const cardAddButton = document.querySelector('.profile__add-button');
const popupAddCardCloseButton = document.querySelector('.popup__close-button_place');
const popupAddCardCreateButton = document.querySelector('.popup__save-button_place');

const popupImage = document.querySelector('.popup_image');
const popupImageCloseButton = document.querySelector('.popup__close-button_image');



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

//добавление новой карточки
function addCard(event) {
    event.preventDefault();
    closeAddCardPopup();
    const placeName = document.getElementById('field-place');
    const placeLink = document.getElementById('field-link');
    const newCard = {
        name: placeName.value,
        link: placeLink.value
    }
    renderCard(newCard);
}

//рендеринг одной карточки
function renderCard(card) {
    const newCard = template.cloneNode(true);
    newCard.querySelector('.photo-grid__card-title').innerText = card.name;
    newCard.querySelector('.photo-grid__image').src = card.link;
    newCard.querySelector('.photo-grid__image').alt = card.name;

    const likeCard = newCard.querySelector('.photo-grid__like-button');
    likeCard.addEventListener('click', () => {
        likeCard.classList.toggle('photo-grid__like-button_active');
    });

    const trashButton = newCard.querySelector('.photo-grid__trash-button');
    trashButton.addEventListener('click', deleteCard);

    function deleteCard(click) {
        click.target.closest('.photo-grid__card').remove();
    }

    const photoGridImage = newCard.querySelector('.photo-grid__image');
    photoGridImage.addEventListener('click', openCard);
    popupImageCloseButton.addEventListener('click', closeCard);

    list.prepend(newCard);
}

//рендеринг массива карточек
function render() {
    gridCards.reverse().forEach(renderCard);
}

render();

//зум карточки
function openCard(click) {
    popupImage.classList.add('popup_opened');

    const cardBig = document.querySelector('.popup__image');
    const cardBigTitle = document.querySelector('.popup__image-title');
    cardBig.alt = click.target.alt;
    cardBig.src = click.target.src;
    cardBigTitle.innerText = click.target.alt;
};

function closeCard() {
    popupImage.classList.remove('popup_opened')
};



profileEditButton.addEventListener('click', openEditPopup);
popupCloseButton.addEventListener('click', closePopup);
popupContainer.addEventListener('submit', formSubmitHandler);
cardAddButton.addEventListener('click', openAddCardPopup);
popupAddCardCloseButton.addEventListener('click', closeAddCardPopup);
popupAddCardCreateButton.addEventListener('click', addCard);
