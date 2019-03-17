export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5);
  let bowls = 0;
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill('🥣')
      .join('')} ${minutes} min read`;
  } else {
    return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
  }
}

export function emoji() {
  if (navigator.userAgent.indexOf('Mac OS X') != -1) {
    window.location.hash = '👩🏾‍💻';
  }
}
console.log("You found my landing page! You're awesome.");
