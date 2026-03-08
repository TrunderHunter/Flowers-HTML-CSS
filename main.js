onload = () => {
  const FLOWER_REVEAL_DELAY_MS = 6000;
  const butterflies = document.querySelector(".butterflies");

  document.body.classList.remove("container");

  if (butterflies) {
    setTimeout(() => {
      butterflies.classList.add("butterflies--active");
    }, FLOWER_REVEAL_DELAY_MS);
  }
};
