const popupAddPost = document.querySelector(".popup");
const buttonPopupOpen = document.querySelector(".advices__button");
const containerPosts = document.querySelector(".advices");
const templatePost = document.getElementById('post').content;

const togglePopup = (popupName) => {
  popupName.classList.toggle("popup_is-opened");
}

buttonPopupOpen.addEventListener("click", () => {
  togglePopup(popupAddPost)
});

const createPost = (data) => {
  const postElement = templatePost.querySelector(".post__item").cloneNode(true);

}
