function Card() {
  const node = document.createElement("div");
  node.classList.add("card");
  applyRandomColor();

  function applyRandomColor() {
    node.style.background = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
  }

  node.append(CardContent(), CardAction({ clickHandler: applyRandomColor }));

  return node;
}

function CardContent() {
  const node = document.createElement("div");
  node.classList.add("card__content");
  node.textContent = "Hello World!";

  return node;
}

function CardAction({ clickHandler }) {
  const node = document.createElement("button");
  node.textContent = "Click me";
  node.classList.add("card__action");

  node.addEventListener("click", clickHandler);

  return node;
}

function init() {
  document.body.appendChild(Card());
}
