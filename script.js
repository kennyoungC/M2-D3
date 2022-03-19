`use strict`;
// slider
const slide = function () {
  const slides = document.querySelectorAll(`.slide`);
  const btnLeft = document.querySelector(`.slider__btn--left`);
  const btnRight = document.querySelector(`.slider__btn--right`);
  const slider = document.querySelector(`.slider`);
  const dotContainer = document.querySelector(`.dots`);

  let curSlide = 0;
  const maxSlide = slides.length;

  // slider.style.transform = `scale(0.4) translateX(-800px)`;
  // slider.style.overflow = `visible`;
  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        `beforeend`,
        `<button class= "dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(`.dots__dot`)
      .forEach((dot) => dot.classList.remove(`dots__dot--active`));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add(`dots__dot--active`);
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  dotContainer.addEventListener(`click`, function (e) {
    if (e.target.classList.contains(`dots__dot`)) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      activateDot(slide);
    }
  });
  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  // 0%, 100%, 200%, 300%

  //next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };
  // Prev Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };

  init();

  // Events handlers
  btnRight.addEventListener(`click`, nextSlide);
  //curSlide = 1: -100%, 0%, 100%, 200%
  btnLeft.addEventListener(`click`, prevSlide);

  document.addEventListener(`keydown`, function (e) {
    if (e.key === `ArrowLeft`) prevSlide();
    e.key === `ArrowRight` && nextSlide();
  });
};
slide();
// faq section
const boxItem = document.querySelectorAll(`.item`);

boxItem.forEach((el) =>
  el.addEventListener(`click`, function () {
    el.classList.toggle(`open`);
  })
);
// smooth scrolling
document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});
const badge = document.querySelectorAll(`.badges`);
const addBadge = function () {
  badge.forEach((el) => {
    console.log(el);
    // const div = document.createElement(`div`);
    // div.classList.add(`badge`);
    // div.textContent = `HOT`;
    el.innerHTML += `<P class="badge bg-danger">HOT</P>`;
  });
};
// const header = document.querySelector(`.welcome`);
// header.addEventListener(`click`, addBadge);

// function addToggleButton() {
//   for (let section of document.querySelectorAll(`section`)) {
//     section.children[0].classList.add(`collapse`);
//     section.children[0].classList.add(`show`);
//     section.innerHTML =
//       `<button class="btn btn-outline-light bg-dark toggle-btn" data-bs-toggle="collapse" data-bs-target="#${section.id} > div">show/hide section</button>` +
//       section.innerHTML;
//   }
// }
// // window.onload = function () {
// addToggleButton();
// // };
