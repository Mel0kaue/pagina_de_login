const form = document.getElementById("form");
const emailImput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const loginBtn = document.querySelector(".solid");

loginBtn.addEventListener("click", () => {
  const email = emailImput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("Preencha todos os campos!");
  } else {
    alert("Login realizado com sucesso!");
  }
});
