class Message {
  #name;
  #date;
  #mess;

  constructor(name, date, mess) {
    this.#name = name;
    this.#date = date;
    this.#mess = mess;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    if (name.length !== 0) {
      this.#name = name;
    }
  }

  getDate() {
    return this.#date;
  }

  setDate(date) {
    this.#date = date;
  }

  getMess(mess) {
    return this.#mess;
  }

  setMess(mess) {
    if (mess.length !== 0) {
      this.#mess = mess;
    }
  }
}

const arrMess = [
  new Message(
    "Name",
    new Date().toLocaleString(),
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque suscipit repellendus, optio, pariatur reiciendis eligendi ea illo non sequi voluptatem accusamus maxime quae alias aut, obcaecati veritatis doloribus odio nihil. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque suscipit repellendus, optio, pariatur reiciendis eligendi ea illo non sequi voluptatem accusamus maxime quae alias aut, obcaecati veritatis doloribus odio nihil."
  ),
];
console.log(arrMess[0]);

function addMessToPage(message) {
  const divMessage = document.createElement("div");
  divMessage.classList.add("mainDivMessage");

  const divToFirstString = document.createElement("div");
  divToFirstString.classList.add("divToFirstString");

  const Name = document.createElement("p");
  Name.style.display = "inline-block";
  Name.innerText = message.getName();

  const Date = document.createElement("p");
  Date.style.display = "inline-block";
  Date.innerText = message.getDate();

  divToFirstString.appendChild(Name);
  divToFirstString.appendChild(Date);

  const Mess = document.createElement("p");
  Mess.classList.add("messageCss");
  Mess.innerText = message.getMess();

  divMessage.appendChild(divToFirstString);
  divMessage.appendChild(Mess);
  document.body.appendChild(divMessage);
}

function AddBlockMessage() {
  const divSendMess = document.createElement("div");
  divSendMess.classList.add("divSendMess");

  const label1 = document.createElement("label");
  label1.innerText = "Add new Message";
  label1.classList.add("label1");
  divSendMess.appendChild(label1);

  const divInput1 = document.createElement("div");
  divInput1.classList.add("divInput");

  const label2 = document.createElement("label");
  label2.innerText = "Your name:";
  label2.classList.add("labelForInput");
  label2.setAttribute("for", "input2");

  const input2 = document.createElement("input");
  input2.setAttribute("id", "input2");

  divInput1.appendChild(label2);
  divInput1.appendChild(input2);
  divSendMess.appendChild(divInput1);

  const divInput2 = document.createElement("div");
  divInput2.classList.add("divInput");
  const label3 = document.createElement("label");
  label3.innerText = "Your message:";
  label3.setAttribute("for", "input3");

  const input3 = document.createElement("textarea");
  input3.id = "input3";

  divInput2.appendChild(label3);
  divInput2.appendChild(input3);
  divSendMess.appendChild(divInput2);

  const buttonSend = document.createElement("button");
  buttonSend.innerText = "Send";
  buttonSend.id = "buttonSend";
  divSendMess.appendChild(buttonSend);
  document.body.appendChild(divSendMess);

  buttonSend.addEventListener("click", function(){
    const newMess=new Message(input2.value, new Date().toLocaleString(), input3.value);
    arrMess.push(newMess);
    addMessToPage(newMess);
    document.body.insertBefore(divSendMess, document.getElementById("buttonSend").nextSibling);
    input2.value="";
    input3.value="";
  })

}

document.addEventListener("DOMContentLoaded", addMessToPage(arrMess[0]));
document.addEventListener("DOMContentLoaded", AddBlockMessage);


