import React from "react";

function Card({ card, onCardClick }) {
  return (
    <li className="element">
      <img
        onClick={() => onCardClick(card)}
        className="element__image"
        alt={card.name}
        src={card.link}
      />
      <button
        type="button"
        className="element__delete-btn"
        aria-label="удалить карточку"
      ></button>
      <div className="element__item">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__like_about">
          <button
            type="button"
            className="element__like"
            aria-label="поставить лайк"
          ></button>
          <span className="element__like_counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
export default Card;
