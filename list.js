const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

btn.addEventListener("click", btnClick);

function btnClick() {
  console.log(content.classList);

  if (content.classList.contains("hidden")) {
    btn.textContent = "Кликните сюда чтобы убрать информацию обо мне";
  } else {
    btn.textContent = "Кликните сюда чтобы узнать меня подробнее";
  }

  content.classList.toggle("hidden");
}