const hoursEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampms");

function timeShow() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am_pm = "AM";
  if (h > 10) {
    h = h - 12;
    am_pm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  h = h <= 12 ? "12" : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hoursEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerHTML = s;
  ampmEl.innerText = am_pm;

  setTimeout(() => {
    timeShow();
  }, 1000);
}
timeShow();

//date start
const dayEl = document.getElementById("days");
const monthEl = document.getElementById("months");
const yearEl = document.getElementById("years");

function dateShow() {
  let d = new Date().getDate();
  let m = new Date().getMonth()+1;
  let y = new Date().getFullYear();
  d = d < 10 ? "0" + d : d;
  m = m < 10 ? "0" + m : m;
  dayEl.innerText = d;
  monthEl.innerText = m;
  yearEl.innerText = y;
  setInterval(() => {
    dateShow();
  }, 1000);
}
dateShow();
