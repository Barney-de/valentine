names = prompt("Please enter your name.");
document.querySelector(".hello").textContent = `Hello, ${names}!`;

document.querySelector(".yes").addEventListener("click", function () {
  window.location.href = "yes.html";
});

let clickCount = 0;
const messages = [
  "please say yes😢",
  "don't you love me?😢😢",
  "I'm begging you😢😢😢",
  "I'm heartbroken💔",
];
document.querySelector(".no").addEventListener("click", function () {
  clickCount++;
  if (clickCount === 1) {
    document.querySelector(".please").textContent = "please say yes😢";
  } else if (clickCount === 2) {
    document.querySelector(".please").textContent = "don't you love me?😢😢";
  } else if (clickCount === 3) {
    document.querySelector(".please").textContent = "I'm begging you😢😢😢";
  } else if (clickCount > 4) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.querySelector(".please").textContent = messages[randomIndex];
  }
});
