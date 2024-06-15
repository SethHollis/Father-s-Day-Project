import { tipMug } from "./tipMug.js";
import { startCarousel } from "./startCarousel.js";


export const rim = document.querySelector('.rim');
export const text = document.querySelector('.text');
export const mugBody = document.querySelector('.mug-body');
export const coffee = document.querySelector('.coffee');
export const mugBottom = document.querySelector('.bottom');
export const inside = document.querySelector('.inside');
export const handle = document.querySelector('.handle');
export const n1 = document.querySelector('.n1');
export const n2 = document.querySelector('.n2');
export const n3 = document.querySelector('.n3');
export const n4 = document.querySelector('.n4');
export const n5 = document.querySelector('.n5');

export let positiveNum = 0;
export let negativeNum = 0;
let delta = null;


export const hiddenMessage = document.querySelector('.hidden-message');
export const slide1 = document.querySelector('.slide1');
export const slide2 = document.querySelector('.slide2');
export const slide3 = document.querySelector('.slide3');
export const slide4 = document.querySelector('.slide4');
export const slide5 = document.querySelector('.slide5');
export const slide6 = document.querySelector('.slide6');


window.addEventListener("wheel", event => {
  delta = Math.sign(event.deltaY);
  scrollNums();
  if (positiveNum > 5 && positiveNum < 110) {
    tipMug();
  } else if (positiveNum > 110 && positiveNum < 260) {
    startCarousel();
  }
});

function scrollNums () {
  if(positiveNum >= 0 && positiveNum <= 262){
    positiveNum += delta * 2;
    negativeNum += delta * -2;
  } else if (positiveNum < 0) {
    positiveNum = 0;
    negativeNum = 0;
  } else if (positiveNum > 262) {
    positiveNum = 262;
    negativeNum = -262;
  }
}