const form = document.querySelector('.chatForm');
const sendBtn = document.querySelector('#sendBtn');
const textInput = document.querySelector('#textInput');
const chatDisplay = document.querySelector('.chatDisplay');
const chatSelf = document.querySelector('.self');

sendBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  let txt = textInput.value;

  let chat = document.createElement('div');
  chat.className = "chat self"

  let p = document.createElement('p');
  p.setAttribute("class", "chatMessage");

  p.innerHTML = txt;

  let avt = document.createElement('div');
  avt.setAttribute("class", "userPhoto");

  chat.appendChild(p);
  chat.appendChild(avt);

  chatDisplay.appendChild(chat);
});


function sendMsg(){

  let txt = textInput.value;

  let chat = document.createElement('div');
  chat.className = "chat self"

  let p = document.createElement('p');
  p.setAttribute("class", "chatMessage");

  p.innerHTML = txt;

  let avt = document.createElement('div');
  avt.setAttribute("class", "userPhoto");

  chat.appendChild(p);
  chat.appendChild(avt);

  chatDisplay.appendChild(chat);

}


// const form = document.querySelector('.chatForm');
// const sendBtn = document.querySelector('#sendBtn');
// const textInput = document.querySelector('#textInput');
// const chatDisplay = document.querySelector('.chatDisplay');
// const chatSelf = document.querySelector('.self');
//
// sendBtn.addEventListener('click', sendMsg);
//
//
// function sendMsg(){
//
//   let txt = textInput.value;
//
//   let chat = document.createElement('div');
//   chat.className = "chat self"
//
//   let p = document.createElement('p');
//   p.setAttribute("class", "chatMessage");
//
//   p.innerHTML = txt;
//
//   let avt = document.createElement('div');
//   avt.setAttribute("class", "userPhoto");
//
//   chat.appendChild(p);
//   chat.appendChild(avt);
//
//   chatDisplay.appendChild(chat);
//
// }
