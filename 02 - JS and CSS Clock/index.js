const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function updateHand(value, element, divisor) {
  const valueDegrees = ((value / divisor) * 360) + 90;
  element.style.transform = `rotate(${valueDegrees}deg)`;
}

function setDate() {
  const now = new Date();

  updateHand(now.getSeconds(), secondHand, 60);
  updateHand(now.getMinutes(), minHand, 60);
  updateHand(now.getHours(), hourHand, 12);
}

function setDateOld() {
  const now = new Date();

  const seconds = now.getSeconds();
  // gets seconds to go around the whole circle and added 90 degs cuz we rotated the hands by 90 degrees
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
