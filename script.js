const form = document.getElementById("form");
const emailImput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const loginBtn = document.querySelector(".solid");

const messageContainer = document.createElement("div");
messageContainer.style.marginTop = "10px";
form.appendChild(messageContainer);

loginBtn.addEventListener("click", () => {
  const email = emailImput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    messageContainer.textContent = "Preencha todos os campos";
    messageContainer.style.color = "white";
    messageContainer.style.backgroundColor = "tomato";
    messageContainer.style.padding = "10px";
  } else {
    messageContainer.textContent = "Login realizado com sucesso!";
    messageContainer.style.color = "white";
    messageContainer.style.backgroundColor = "green";
    messageContainer.style.padding = "10px";
  }
});
