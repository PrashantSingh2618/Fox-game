export const ICONS = ["fish", "poop", "weather"];
export const SCENES = ["rain", "day"];
export const TICK_RATE = 1000;
export const RAIN_CHANCE = Math.random();
export const DayLength = 60;
export const NightLength = 4;

export const getNextHungerTime = (time) =>
  Math.floor(Math.random() * 3) + 5 + time;
export const getNextDieTime = (time) =>
  Math.floor(Math.random() * 3) + 3 + time;
export const getNextPoopTime = (time) =>
  Math.floor(Math.random() * 3) + 4 + time;
