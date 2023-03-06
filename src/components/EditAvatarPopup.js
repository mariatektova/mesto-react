import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useEffect, useRef } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef("");

  function handleChangeAvatar() {
    return avatarRef.current.value;
  }

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      btnCurrentText="Сохранить"
      onClose={onClose}
      onSubmit={handleSubmit}
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
            onChange={handleChangeAvatar}
            ref={avatarRef}
          />
          <span className="form__input-error avatar-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
