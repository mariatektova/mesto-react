import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__main">
          <div className="profile__overlay">
            <img
              src={currentUser.avatar}
              className="profile__avatar"
              alt="Аватарка"
              style={{ backgroundImage: `url(${currentUser.avatar})` }}
            />

            <div
              className="profile__avatar-button"
              onClick={onEditAvatar}
            ></div>
          </div>

          <div className="profile__info">
            <h1 className="profile__info-name">{currentUser.name}</h1>
            <button
              className="profile__info-button"
              type="button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__info-text">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
