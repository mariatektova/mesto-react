import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileOpenClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatar() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddPlace() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(data){
    setSelectedCard(data)
  };

  function closePopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false)
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileOpenClick}
        onEditAvatar={handleEditAvatar}
        onAddPlace={handleAddPlace}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup />
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        btnCurrentText="Сохранить"
        onClose={closePopups}
      >
        <fieldset className="form__set">
          <label className="form__field">
            <input
              className="form__input"
              type="text"
              name="username"
              placeholder="Введите имя"
              id="name-input"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="form__input-error name-input-error"></span>
          </label>
          <label className="form__field">
            <input
              className="form__input"
              type="text"
              name="job"
              placeholder="Введите профессию"
              id="text-input"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="form__input-error text-input-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        btnCurrentText="Сохранить"
        onClose={closePopups}
      >
        <fieldset className="form__set">
          <label className="form__field">
            <input
              className="form__input"
              type="url"
              name="avatar"
              id="avatar-input"
              placeholder="Ссылка на исходное изображение"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="form__input-error avatar-input-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="card"
        isOpen={isAddPlacePopupOpen}
        btnCurrentText="Создать"
        onClose={closePopups}
      >
        <fieldset className="form__set">
          <label className="form__field">
            <input
              className="form__input"
              type="text"
              name="name"
              id="title-input"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="form__input-error title-input-error"></span>
          </label>
          <label className="form__field">
            <input
              className="form__input"
              type="url"
              id="link-input"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="form__input-error link-input-error"></span>
          </label>
        </fieldset>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closePopups}/>
    </div>
  );
}
export default App;
