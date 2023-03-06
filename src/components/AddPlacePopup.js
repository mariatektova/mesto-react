import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPLace }) {
  const [cardName, setCardName] = useState("");
  const [cardLink, setCardLink] = useState("");
  const inputNameRef = React.useRef("");
  const inputLinkRef = React.useRef("");

  useEffect(() => {
    inputNameRef.current.value = "";
    inputLinkRef.current.value = "";
  }, [isOpen]);

  function handleChangeCardName(e) {
    setCardName(e.target.value);
  }
  function handleChangeCardLink(e) {
    setCardLink(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddPLace({
      name: cardName,
      link: cardLink,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="card"
      isOpen={isOpen}
      btnCurrentText="Создать"
      onClose={onClose}
      onSubmit={handleSubmit}
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
            onChange={handleChangeCardName}
            ref={inputNameRef}
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
            onChange={handleChangeCardLink}
            ref={inputLinkRef}
          />
          <span className="form__input-error link-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
