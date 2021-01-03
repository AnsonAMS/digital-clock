const clock = document.querySelector('.clock');

const addZeroToHour = (h) => {
    if (h < 10) {
      h = "0" + h;
    }
    return h;
  }

const addZeroToMinute = (m) => {
    if (m < 10) {
      m = "0" + m;
    }
    return m;
  }  

const addZeroToSecond = (s) => {
    if ( s < 10) {
       s = "0" + s;
    }
    return s;
  }
const tick = () => {
    
    const now = new Date();
    
    const h = now.getHours();

    // const addZeroToHour = (h) => {
    //     if (h < 10) {
    //       h = "0" + h;
    //     }
    //     return h;
    //   }

    const m = now.getMinutes();

    // const addZeroToMinute = (m) => {
    //     if (m < 10) {
    //       m = "0" + m;
    //     }
    //     return m;
    //   }

    const s = now.getSeconds();

    // const addZeroToSecond = (s) => {
    //     if ( s < 10) {
    //        s = "0" + s;
    //     }
    //     return s;
    //   }

    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = html;

};

setInterval(tick, 1000); 

const now = new Date();

console.log(dateFns.isToday(now));