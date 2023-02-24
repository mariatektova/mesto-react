import React from "react";
function ImagePopup({card, onClose}) {

  return (
    <>
   {card && <section className= {`popup popup_lightbox popup_opened`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <img className="popup__lbx-img" alt={card.name} src={card.link}/>
        <p className="popup__lbx-txt">{card.name}</p>
      </div>
    </section>
  };
  </>
  );
}

export default ImagePopup;
