let alarmTime = null;
let alarmSound = document.getElementById("alarmSound");

// Show current time
function updateTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    let currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("currentTime").innerText = currentTime;

    // Check alarm
    if (alarmTime === `${hours}:${minutes}`) {
        alarmSound.play();
        document.getElementById("status").innerText = "⏰ Alarm Ringing!";
    }
}

setInterval(updateTime, 1000);

// Set alarm
function setAlarm() {
    alarmTime = document.getElementById("alarmTime").value;
    if (alarmTime) {
        document.getElementById("status").innerText = `Alarm set for ${alarmTime}`;
    }
}

// Clear alarm
function clearAlarm() {
    alarmTime = null;
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.getElementById("status").innerText = "Alarm cleared";
}
