const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let timerSeconds = seconds;

    const timer = () => {
      let hours = Math.trunc(timerSeconds / 3600);
      let minutes = Math.trunc(timerSeconds / 60) - (hours * 60);
      let sec = timerSeconds % 60;
      timerEl.textContent = `${hours}:${minutes}:${sec}`;
    }
    timer();

    let timerId = setInterval(() => {
      timerSeconds = timerSeconds - 1;
      if (timerSeconds === 0) clearInterval(timerId);
      timer()
    }, 1000)
  }
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '')
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});

