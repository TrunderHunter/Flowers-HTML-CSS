onload = () => {
  const FLOWER_REVEAL_DELAY_MS = 6000;
  const LETTER_READY_MS = 3200;
  const INTRO_FADE_OUT_MS = 900;
  const butterflies = document.querySelector(".butterflies");
  const letterIntro = document.querySelector("#letterIntro");
  const openLetterBtn = document.querySelector("#openLetterBtn");

  let sceneStarted = false;
  let canContinue = false;

  const startMainScene = () => {
    if (sceneStarted) {
      return;
    }

    sceneStarted = true;

    if (letterIntro) {
      letterIntro.classList.add("is-exiting");
      setTimeout(() => {
        letterIntro.remove();
        document.body.classList.remove("container");

        if (butterflies) {
          setTimeout(() => {
            butterflies.classList.add("butterflies--active");
          }, FLOWER_REVEAL_DELAY_MS);
        }
      }, INTRO_FADE_OUT_MS);
      return;
    }

    document.body.classList.remove("container");

    if (butterflies) {
      setTimeout(() => {
        butterflies.classList.add("butterflies--active");
      }, FLOWER_REVEAL_DELAY_MS);
    }
  };

  const openLetter = () => {
    if (!letterIntro || letterIntro.classList.contains("is-open")) {
      return;
    }

    letterIntro.classList.add("is-open");
    setTimeout(() => {
      canContinue = true;
      letterIntro.classList.add("is-ready");
    }, LETTER_READY_MS);
  };

  if (openLetterBtn) {
    openLetterBtn.addEventListener("click", openLetter);
  }

  if (letterIntro) {
    letterIntro.addEventListener("click", () => {
      if (letterIntro.classList.contains("is-open") && canContinue) {
        startMainScene();
      }
    });
  }

  if (!letterIntro) {
    startMainScene();
  }
};
