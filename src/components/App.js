import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditPriofliePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInfo().then((profileInfo) => {
      setCurrentUser(profileInfo);
    });
    api.getCards().then((dataCard) => {
      setCards(
        dataCard.map((data) => ({
          _id: data._id,
          name: data.name,
          link: data.link,
          likes: data.likes,
          owner: data.owner,
        }))
      );
    });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }
  function handleDeleteClick(card) {
    api
      .deleteCards(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id != card._id));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleUpdateUser(updatedInfo) {
    api
      .setInfo(updatedInfo)
      .then((data) => {
        setCurrentUser(data);
        closePopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }
  function handleUpdateAvatar(updateAvatar) {
    api
      .changeAvatar(updateAvatar)
      .then((data) => {
        setCurrentUser(data);
        closePopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }
  function handleAddPlaceSubmit(data) {
    api
      .postCard(data)
      .then((createCard) => {
        setCards([createCard, ...cards]);
        closePopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }
  function handleEditProfileOpenClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditAvatar() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAddPlace() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(data) {
    setSelectedCard(data);
  }

  function closePopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileOpenClick}
          onEditAvatar={handleEditAvatar}
          onAddPlace={handleAddPlace}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteClick}
          cards={cards}
        />
        <Footer />
        <ImagePopup />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closePopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closePopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closePopups}
          onAddPLace={handleAddPlaceSubmit}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closePopups}
          isOpen={selectedCard}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
