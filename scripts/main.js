const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/jumpout.png") {
    myImage.setAttribute("src", "images/freeworld.png");
  } else {
    myImage.setAttribute("src", "images/jumpout.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myButton.addEventListener("click", () => {
  setUserName();
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `You're a FLXR, ${myName}`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `You're a FLXR, ${storedName}`;
}

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `You're a FLXR, ${myName}`;
  }
}
