const newYear = document.getElementById('next-year');
const days    = document.getElementById('days');
const hours   = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
  
function figureCountdown() {

  const current = dayjs();  //gets current year using DayJS
  const nextY = dayjs().year() + 1;   //takes current year and adds 1 for next year
  const endTime = dayjs( nextY + '-01-01' );  //sets the countdown date

  const ms = endTime.diff( current );   //in milliseconds gets diff between current and endTime

  const base  = Math.floor( ms / 1000 )   //convert milliseconds to seconds for time calculations

  const s  = Math.floor( base % 60 )    //divide by 60 for min in hour... remainder is seconds to display

  const m  = Math.floor( base / 60 % 60 )   //calculate minutes to display

  const h  = Math.floor( base / 60 / 60 % 24 )  //calculate hours to display

  const d  = Math.floor( base / 60 / 60 / 24 )  //calculate days to display
  
  // insert variable into DOM
  seconds.textContent = s < 10 ? '0' + s : s;
  minutes.textContent = m < 10 ? '0' + m : m;
  hours.textContent   = h < 10 ? '0' + h : h;
  days.textContent    = d;

  newYear.textContent = nextY;

}

setInterval( figureCountdown, 1000 );