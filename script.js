const modalText = document.querySelector(".modal-text");
const text = document.querySelector(".text");
const button = document.querySelector(".button");
const modal = document.querySelector("my-modal");

button.addEventListener("click", () => {
    modalText.textContent = text.textContent;
    modal.classList.add('open')
})
