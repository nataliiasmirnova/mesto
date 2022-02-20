const popupProfile = document.querySelector('.popup_profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfileCloseButton = document.querySelector('.popup__close-button_profile');
const popupFormProfile = document.querySelector('.popup__form_profile');
const nameInput = document.getElementById('field-name');
const professionInput = document.getElementById('field-profession');
const nameOutput = document.querySelector('.profile__name');
const professionOutput = document.querySelector('.profile__profession');

//переменные для работы с template
const template = document.querySelector('.card_template').content;
const list = document.querySelector('.photo-grid__list');

//переменные для работы с добавлением карточки
const popupAddPlace = document.querySelector('.popup_add-place');
const popupFormAddPlace = document.querySelector('.popup__form_add-place');
const cardAddButton = document.querySelector('.profile__add-button');
const popupAddCardCloseButton = document.querySelector('.popup__close-button_place');

const popupImage = document.querySelector('.popup_image');
const popupImageCloseButton = document.querySelector('.popup__close-button_image');
const placeName = document.getElementById('field-place');
const placeLink = document.getElementById('field-link');

//переменные для работы с открытием карточки
const cardBig = document.querySelector('.popup__image');
const cardBigTitle = document.querySelector('.popup__image-title');


//открытие попапа
function openPopup(popup) {
    popup.classList.add('popup_opened')
}

//закрытие попапа через кнопку закрытия
function closePopup(popup) {
    popup.classList.remove('popup_opened')
}

//автозаполнение поапа данными из профиля
function openEditPopup() {
    openPopup(popupProfile);
    nameInput.value = nameOutput.textContent;
    professionInput.value = professionOutput.textContent;
}

//редактирование и сохранение инфо в профиле
function submitEditProfile(evt) {
    evt.preventDefault();
    nameOutput.textContent = nameInput.value;
    professionOutput.textContent = professionInput.value;
    closePopup(popupProfile);
}

//добавление новой карточки
function addCard(event) {
    event.preventDefault();
    closePopup(popupAddPlace);
    const newCard = {
        name: placeName.value,
        link: placeLink.value
    }
    popupFormAddPlace.reset();
    renderCard(newCard);
}

//зум карточки
function openCard(click) {
    openPopup(popupImage);
    cardBig.alt = click.target.alt;
    cardBig.src = click.target.src;
    cardBigTitle.innerText = click.target.alt;
};

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

    list.prepend(newCard);
}

//рендеринг массива карточек
function render() {
    gridCards.reverse().forEach(renderCard);
}

render();



profileEditButton.addEventListener('click', openEditPopup);
popupProfileCloseButton.addEventListener('click', () => { closePopup(popupProfile) });
popupFormProfile.addEventListener('submit', submitEditProfile);

cardAddButton.addEventListener('click', () => { openPopup(popupAddPlace) });
popupAddCardCloseButton.addEventListener('click', () => { closePopup(popupAddPlace) });
popupFormAddPlace.addEventListener('submit', addCard);
popupImageCloseButton.addEventListener('click', () => { closePopup(popupImage) });
