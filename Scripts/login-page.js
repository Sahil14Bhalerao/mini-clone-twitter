const loginInp = document.querySelectorAll(".inp-area input");
const loginBtn = document.querySelector(".btn-area a");

let btnOver = () => {
  loginBtn.style.backgroundColor = "rgb(12, 144, 225)";
  loginBtn.style.border = "1px solid rgb(12, 144, 225)";
};
let btnOut = () => {
  loginBtn.style.backgroundColor = "rgb(29, 161, 242)";
  loginBtn.style.border = "1px solid rgb(29, 161, 242)";
};

document.addEventListener("keyup", () => {
  let checker = 0;
  loginInp.forEach((inp) => {
    if (inp.value != "") {
      checker++;
    } else checker = 0;
  });

  if (checker == 2) {
    loginBtn.style.opacity = "1";
    loginBtn.style.cursor = "pointer";
    loginBtn.addEventListener("mouseover", btnOver, true);
    loginBtn.addEventListener("mouseout", btnOut, true);
  } else {
    loginBtn.style.opacity = "0.5";
    loginBtn.style.cursor = "initial";
    loginBtn.removeEventListener("mouseover", btnOver, true);
    loginBtn.removeEventListener("mouseout", btnOut, true);
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', (e)=>e.preventDefault())