setInterval(() => {
    let hrs=document.getElementById('hrs')
    let min=document.getElementById('min')
    let sec=document.getElementById('sec')
    let clock = document.querySelector('.clock')
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds(); 
    am_pm="AM" 
    if (hour >= 12) {
        if (hour > 12) hour-=12;
        am_pm = "PM"
    }
    else if (hour == 0) {
        hour= 12;
        am_pm = "AM"
    }
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let currentTime = hour + " : " + minutes + " : " + seconds +" : " + am_pm
    clock.innerHTML = currentTime
}, 1000);
