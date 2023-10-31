const WEEK = ["SEG","TER","QUA","QUI","SEX","SAB","DOM"];

var now = new Date();
console.log(zeroPadding(now.getHours(), 2) + ":" + zeroPadding(now.getMinutes(),2) + ":" + zeroPadding(now.getSeconds(),2));

function updateTime(){
    var now = new Date();

    document.getElementById("time").innerHTML = zeroPadding(now.getHours(), 2) + ":" + zeroPadding(now.getMinutes(), 2) + ":" + zeroPadding(now.getSeconds(), 2);

    document.getElementById("date").innerHTML = 
            now.getFullYear() + "-" + 
            zeroPadding(now.getMonth() + 1, 2) + "-" +
            zeroPadding(now.getDate(), 2) + " " +
            WEEK[now.getDay()];
} 

updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit){
    return String(num).padStart(digit, '0');
}