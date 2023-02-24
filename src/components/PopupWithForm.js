function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  btnCurrentText,
  children,
}) {
  return (
    <section className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container-form">
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="form form_element" name={name} noValidate>
          {children}
          <button className="form__button" type="submit" name="element">
            {btnCurrentText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
