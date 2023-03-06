import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
    e.target.value = "";
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      btnCurrentText="Сохранить"
      onClose={onClose}
      onSubmit={handleSubmit}
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
            onChange={handleChangeName}
            value={name || ""}
          />
          <span className="form__input-error name-input-error"></span>
        </label>
        <label className="form__field">
          <input
            className="form__input"
            type="text"
            placeholder="Введите профессию"
            id="text-input"
            required
            minLength="2"
            maxLength="200"
            onChange={handleChangeDescription}
            value={description || ""}
          />
          <span className="form__input-error text-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
