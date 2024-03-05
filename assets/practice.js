class userData {
  #login;
  #password;

  constructor() {
    this.#login = "admin";
    this.#password = "admin";
  }

  getLogin() {
    return this.#login;
  }
  getPass() {
    return this.#password;
  }
}

const userCreate = new userData();
// Флаг для недопущения добавления второго спана
let spanOnlyOne = false;

document.getElementById("btn").addEventListener("click", function () {
  const inputLogin = document.getElementById("loginData").value;
  const inputPass = document.getElementById("pwdData").value;
  if (
    inputLogin === userCreate.getLogin() &&
    inputPass === userCreate.getPass() &&
    !spanOnlyOne
  ) {
    localStorage.setItem(
      "userData",
      JSON.stringify({ user: "admin", pwd: "admin" })
    );
    // console.log(localStorage);

    const success = document.createElement("span");
    const userFromLocalStorage = JSON.parse(localStorage.getItem("userData"));
    success.style.color = "green";
    success.innerText = `Привет ${userFromLocalStorage.user}`;
    document.getElementById("inputDiv").appendChild(success);
    spanOnlyOne = true;
  } else if(!spanOnlyOne){
    const unSuccess = document.createElement("span");
    unSuccess.innerHTML = "Введены неверные данные";
    unSuccess.style.color = "red";
    document.getElementById("inputDiv").appendChild(unSuccess);
    spanOnlyOne = true;
  }
});

// Функционал для попытки повторного ввода логина и пароля (сброс данных)
function removeSpan() {
  const spans = document.querySelectorAll("#inputDiv span");
  spans.forEach((span) => {
    span.parentNode.removeChild(span);
  });
}

document.getElementById("inputDiv").addEventListener("click", function (event) {
  const inputLogin = document.getElementById("loginData");
  const inputPass = document.getElementById("pwdData");
  spanOnlyOne=false;
  localStorage.clear();
  if (event.target.id === 'loginData') {
  inputLogin.value = "";
  inputPass.value="";
  }
  if(event.target.id === 'pwdData')
  {
    inputPass.value="";
  }
  removeSpan();
});
