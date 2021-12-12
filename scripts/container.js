const openContainer = (message) => {
  const container = document.createElement("div");
  container.setAttribute("class", "container");

  const close = document.createElement("button");
  close.textContent = "close";
  close.addEventListener("click", (x) => container.remove());

  const content = document.createElement("div");
  content.innerHTML = message;

  container.appendChild(close);
  container.appendChild(content);
  document.querySelector("body").appendChild(container);
};
