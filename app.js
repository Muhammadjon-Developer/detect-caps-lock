let input = document.getElementById("myInput");
let text = document.getElementById("text");

input.addEventListener("keyup", (event) => {
  if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
});
