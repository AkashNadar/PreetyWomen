const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");
const frtImg = document.querySelector(".frt-img");
const mySong = document.getElementById("mySong");
const preetywomen = document.querySelector(".preetywomen");


function getRandomNumber(min, max) {
  // Calculate the random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

btnNo.addEventListener("pointerenter", moveNoButton);
btnNo.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    moveNoButton();
});

function moveNoButton() {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;

    const newLeft = getRandomNumber(
        0,
        containerWidth - btnWidth
    );

    const newTop = getRandomNumber(
        0,
        containerHeight - btnHeight
    );

    btnNo.style.left = `${newLeft}px`;
    btnNo.style.top = `${newTop}px`;
}

function createSunflower() {
    const container = document.getElementById("sunflower-container");

    const sunflower = document.createElement("img");

    sunflower.src = "assets/sunflower.png";
    sunflower.classList.add("sunflower");

    // Random position
    sunflower.style.left = Math.random() * 100 + "vw";

    // Random size
    const size = Math.random() * 25 + 25;
    sunflower.style.width = size + "px";

    // Random falling speed
    const duration = Math.random() * 3 + 4;
    sunflower.style.animationDuration = duration + "s";

    container.appendChild(sunflower);

    // Remove after animation
    setTimeout(() => {
        sunflower.remove();
    }, duration * 1000);
}

function startSunflowers() {
    const shower = setInterval(() => {
        createSunflower();
    }, 150);

    // 🌻 Shower stops after 3 seconds
    setTimeout(() => {
        clearInterval(shower);

        // Wait 3 seconds, then shower again
        setTimeout(() => {
            sunflowerShower();
        }, 8000);

    }, 10000);
}

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");
  frtImg.src = "assets/secondImg.png"
  btnYes.classList.add("hide");
  mySong.currentTime = 0;
  mySong.play();
  preetywomen.classList.remove("hide");
  preetywomen.classList.add("fade-in");
  startSunflowers();
});
