import React, { useState, useEffect } from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);


 useEffect(() => {
     api.getInfo().then((profileInfo) => {
       setUserName(profileInfo.name)
       setUserDescription(profileInfo.about)
       setUserAvatar(profileInfo.avatar)
     })
     api.getCards().then((dataCard) => {
       setCards(dataCard.map((data) => ({
         cardId: data._id,
         name: data.name,
         link: data.link,
         likes: data.likes
       })))
     })
   }, []);
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__main">
          <div className="profile__overlay">
            <img
              src={userAvatar}
              className="profile__avatar"
              alt="Аватарка"
              style={{ backgroundImage: `url(${userAvatar})` }}
            />

            <div
              className="profile__avatar-button"
              onClick={onEditAvatar}
            ></div>
          </div>

          <div className="profile__info">
            <h1 className="profile__info-name">{userName}</h1>
            <button
              className="profile__info-button"
              type="button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__info-text">{userDescription}</p>
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
              card={card}
               onCardClick={onCardClick}/>
           ))}
           </ul>
        </section>
    </main>
  );
}

export default Main;
