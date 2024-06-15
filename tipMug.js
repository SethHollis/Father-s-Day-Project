import { 
  positiveNum, negativeNum, rim, text, mugBody, coffee, mugBottom, inside, handle, n1, n2, n3, n4, n5, hiddenMessage
} from "./script.js";

export function tipMug() {
  rim.style.height = `
    ${positiveNum + 94}px
  `;
  rim.style.top = `
    ${positiveNum / 1.5 }px
  `;
  //!!!!!
  inside.style.height = `
    ${positiveNum + 76}px
  `;
  inside.style.bottom = `
    ${positiveNum / 3 + 514}px
  `;
  //!!!!!
  mugBody.style.height = `
    ${negativeNum + 246}px
  `;
  mugBody.style.bottom = `
    ${negativeNum / 4 + 138}px
  `;
  //!!!!!
  mugBottom.style.height = `
    ${positiveNum + 94}px
  `;
  mugBottom.style.bottom = `
    ${positiveNum / 4 + 185}px
  `;
  //!!!!!
  handle.style.transform = `
    rotateZ(${positiveNum / 12 + 31}deg)
    rotateX(${positiveNum / 4}deg)
    rotateY(${negativeNum / 4}deg)
  `;
  handle.style.bottom = `
    ${positiveNum * 1.3 + 505}px
  `;
  //!!!!!
  coffee.style.height = `
    ${negativeNum / 4 + 80}px
  `;
  coffee.style.top = `
    ${positiveNum + 44}px
  `;
  coffee.style.width = `
    ${positiveNum + 225}px
  `;
  coffee.style.right = `
    ${positiveNum / 2}px
  `;
  if (positiveNum >= 98) {
    coffee.style.borderRadius = `
      ${negativeNum + 148}%
    `;
  }
  //!!!!!
  text.style.top = `
    ${positiveNum / 3 + 42}px
  `;
  n1.style.transform = `
    translate(0px, ${negativeNum / 20 - 4}px)
    skew(${negativeNum / 20 + 15}deg, 40deg)
    rotateX(${negativeNum / 4}deg)
    rotateY(${negativeNum / 6}deg)
    rotateZ(${negativeNum / 20}deg)
  `;
  n2.style.transform = `
    translate(-3px, 5px)
    skew(2deg, 20deg)
    rotateX(${negativeNum / 4}deg)
    rotateY(${negativeNum / 6}deg)
  `;
  n3.style.transform = `
    translate(5px, ${positiveNum / 20 + 17}px)  
    skew(1deg, 13deg)
    rotateX(${negativeNum / 3.7}deg)
  `;
  n4.style.transform = `
    translate(13px, ${positiveNum / 20 + 17}px) 
    skew(1deg, 2deg)
    rotateX(${negativeNum / 3.4}deg)
  `;
  n5.style.transform = `
    translate(19px, ${positiveNum / 20 + 15}px)
    skew(1deg, ${negativeNum / 20 - 4}deg)
    rotateX(${negativeNum / 4}deg)
  `;
  //!!!!!
  hiddenMessage.style.top = `
    ${positiveNum * 1.5 + 580}px
  `;
}