function showTime() {
  let date = new Date();
  let d = date.getDay();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  if (h === 0) {
    h = 12;
  }

  if (h < 10) {
    h = `0${h}`;
  }

  if (m < 10) {
    m = `0${m}`;
  }

  if (s < 10) {
    s = `0${s}`;
  }

  let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = weeks[d];

  let days = document.querySelector("#date");
  let clock = document.querySelector("#my-clock");

  clock.innerHTML = `${h}:${m}:${s}`;
  days.innerHTML = day

  setTimeout(showTime, 1000);
}

showTime();

