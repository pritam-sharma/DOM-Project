var state = document.querySelector("h5");

var btn = document.querySelector("#add");
var check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    state.innerHTML = "Friend";
    state.style.color = "green";
    btn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    state.innerHTML = "Stranger";
    state.style.color = "red";
    btn.innerHTML = "Add Friend";
    check = 0;
  }
});
