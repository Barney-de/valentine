document.querySelector(".submit").addEventListener("click", function () {
  let names = document.querySelector(".name").value;
  if (names.trim() === "") {
    alert("Please enter your name.");
  } else {
    localStorage.setItem("username", names);
    window.location.href = "index.html";
  }
});
