export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5);
  return `${ new Array(cups || 1).fill('🍵').join('') } ${ minutes } min read`;
}

// export function emoji() {
//   if (navigator.userAgent.indexOf('Mac OS X') != -1) {
//     window.location.hash = '👩🏾‍💻';
//   }
// }
// emoji();
// console.log("You found my landing page! You're awesome.");
