const popupAddPost = document.querySelector(".popup");
const buttonPopupOpen = document.querySelector(".advices__button");
const containerPosts = document.querySelector(".advices");

const togglePopup = (popupName) => {
  popupName.classList.toggle("popup_is-opened");
}

buttonPopupOpen.addEventListener("click", () => {
  togglePopup(popupAddPost)
});
