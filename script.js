let menuIcon= document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

const element = document.getElementById("name1");

const text = element.innerHTML.trim();
element.innerHTML = "";
element.style.visibility = "visible";

let i = 0;

function type() {
  let current = text.slice(0, i);
  element.innerHTML = current;

  if (text[i] === "<") {
    i = text.indexOf(">", i) + 1;
  } else {
    i++;
  }

  if (i <= text.length) {
    setTimeout(type, 70);
  }
}

window.addEventListener("load", type);