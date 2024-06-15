import { 
  positiveNum, slide1, slide2, slide3, slide4, slide5, slide6
} from "./script.js";

export function startCarousel() {
  // VVV because I'm too lazy to redo all this math
  let resetPosNum = positiveNum - 112;


  if (resetPosNum > 0 && resetPosNum < 25) {
    slide1.classList.remove('hide-slide');
    slide1.style.bottom = `
      ${resetPosNum * 15 - 143}px
    `;
    slide1.style.right = `
      ${resetPosNum * 3 - 3}px
    `;
    slide1.style.opacity = `
      ${resetPosNum * 4}%
    `;
    slide1.style.zIndex = `
      ${resetPosNum / 2 - 1}
    `;
  } else if (resetPosNum <= 0) {
    slide1.classList.add('hide-slide');
  }
  //!!!!!
  if (resetPosNum > 25 && resetPosNum < 50) {
    slide2.classList.remove('hide-slide');
    slide2.style.bottom = `
      ${resetPosNum * 15 - 503}px
    `;
    slide2.style.left = `
      ${resetPosNum * 3 - 80}px
    `;
    slide2.style.opacity = `
      ${resetPosNum * 4 - 80}%
    `;
    slide2.style.zIndex = `
      ${resetPosNum / 2 - 12}
    `;
  } else if (resetPosNum < 25) {
    slide2.classList.add('hide-slide');
  }
  //!!!!!
  if (resetPosNum > 50 && resetPosNum < 75) {
    slide3.classList.remove('hide-slide');
    slide3.style.bottom = `
      ${resetPosNum * 9 - 581}px
    `;
    slide3.style.left = `
      ${resetPosNum * 4.5 - 234}px
    `;
    slide3.style.opacity = `
      ${resetPosNum * 4 - 200}%
    `;
    slide3.style.zIndex = `
      ${resetPosNum / 2 - 29}
    `;
  } else if (resetPosNum < 50) {
    slide3.classList.add('hide-slide');
  }
  //!!!!!
  if (resetPosNum > 75 && resetPosNum < 100) {
    slide4.classList.remove('hide-slide');
    slide4.style.bottom = `
      ${resetPosNum * 9 - 797}px
    `;
    slide4.style.right = `
      ${resetPosNum * 6 - 455}px
    `;
    slide4.style.opacity = `
      ${resetPosNum * 4 - 280}%
    `;
    slide4.style.zIndex = `
      ${resetPosNum / 2 - 40}
    `;
  } else if (resetPosNum < 75) {
    slide4.classList.add('hide-slide');
  }
  //!!!!!
  if (resetPosNum > 100 && resetPosNum < 125) {
    slide5.classList.remove('hide-slide');
    slide5.style.bottom = `
      ${resetPosNum * 8 - 930}px
    `;
    slide5.style.opacity = `
      ${resetPosNum * 4 - 400}%
    `;
    slide5.style.zIndex = `
      ${resetPosNum / 2 - 53}
    `;
  } else if (resetPosNum < 100) {
    slide5.classList.add('hide-slide');
  }
  //!!!!!
  if (resetPosNum > 125 && resetPosNum < 150) {
    slide6.classList.remove('hide-slide');
    slide6.style.bottom = `
      ${resetPosNum * 8 - 1110}px
    `;
    slide6.style.opacity = `
      ${resetPosNum / 2 - 70}
    `;
    slide6.style.zIndex = `
      ${resetPosNum * 10}
    `;
  } else if (resetPosNum < 125) {
    slide6.classList.add('hide-slide');
  }
}