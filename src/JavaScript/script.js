let powerOnScreenVar = document.getElementById("powerOnScreen");
let onLoadAudio = document.getElementById("onLoadAudio");
const welcome = document.getElementById("welcomeScreen");


// Date time
powerOnScreenVar.addEventListener("ended",powerOnHide);
function powerOnHide() {
    powerOnScreenVar.style.display = "none";
    onLoadAudio.play();
}
windowsdatetime();
function windowsdatetime() {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var date_time = new Date();
    var day = dayNames[date_time.getDay()];
    var date = date_time.getDate();
    var month = monthNames[date_time.getMonth()];
    var hours = date_time.getHours();
    var minutes = date_time.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    var final_date = day + ", " + month + " " + date;
    var time = hours + ":" + minutes
    if (hours > 11) {
        time += " PM";
    } else {
        time += " AM";
    }
    document.getElementById("time").innerText = time
    document.getElementById("date").innerText = final_date
}
window.addEventListener("contextmenu", e => {
    e.preventDefault();
})
window.addEventListener("click", e => {
    let bodyBefore = window.getComputedStyle(document.getElementsByTagName("body")[0],"::before");
    if (document.getElementsByClassName("sign-in")[0].style.bottom == "-1100px"){
        document.getElementsByClassName("sign-in")[0].style.bottom = "0";
        document.getElementsByClassName("sign-in")[0].style.zIndex = "5";
        document.getElementsByClassName("date-time")[0].style.display = "none";
        document.getElementsByTagName("body")[0].style.setProperty("--body-blur","blur(30px)");
    } else{
        document.getElementsByClassName("sign-in")[0].style.bottom = "-1100px"
        document.getElementsByClassName("sign-in")[0].style.zIndex = "-5";
        document.getElementsByClassName("date-time")[0].style.display = "flex";
        document.getElementsByTagName("body")[0].style.setProperty("--body-blur","blur(0px)");
    }
})
function welcomeScreen(){
    welcome.style.display = "block";
    welcome.play()
}
welcome.addEventListener("ended", e => {
    location.replace("home.html")
})