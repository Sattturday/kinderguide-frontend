import { EMAIL_PATTERN } from './constants';
import { METRO_COLOR_LIST } from './filterData';

export const validateEmail = (email) => {
  return String(email).toLowerCase().match(EMAIL_PATTERN);
};

export function throttle(callee, timeout) {
  let timer = null;

  return function perform(...args) {
    if (timer) return;

    timer = setTimeout(() => {
      callee(...args);

      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
}

export function debounce(callback, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export const findLineByStation = (stationName) => {
  let stationLine = null;

  METRO_COLOR_LIST.forEach((line) => {
    const station = line.stations.find((s) => s.name === stationName);
    if (station) {
      stationLine = line;
    }
  });

  return stationLine ? stationLine.hex_color : null;
};
