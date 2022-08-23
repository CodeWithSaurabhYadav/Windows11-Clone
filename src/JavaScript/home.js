//Const Variables
const contextmenu = document.querySelector("#right-click-wrapper");
const viewMenu = document.querySelector(".view-menu");
const sortMenu = document.querySelector(".sort-by-menu");
const newMenu = document.querySelector(".new-menu");
const refresh = document.getElementById("refresh-page");
const weatherImage = document.getElementById("taskbar-left").querySelector("img");
const weatherDetails = document.getElementById("taskbar-left").querySelector("p");
const dayNames = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
const desktopIconsContainer = document.getElementById("desktop-icons-container");
const desktopIconsHidder = document.getElementById("hide-desk-icons");
var startup_menu = document.getElementById("startup-menu-container");
const githubIcon = document.getElementById("github");
const githubLink = "https://www.github.com/codewithsaurabhyadav"
var startup_btn = document.getElementById("home-btn");
var weather_bar = document.getElementById("weather-tansition");

function onloadAlert(){
    var welcomMessage = "This project is purely created in HTML,CSS and JavaScript.\nFor further assistance contact Saurabh Yadav.\nhttps://www.github.com/codewithsaurabhyadav"
    var answer = confirm(welcomMessage);
    console.log(welcomMessage);
    if (answer == false){
        location.replace("disagree.html");
    }
}

// Desktop Features
desktopIconsHidder.addEventListener("click", e =>{
    if (desktopIconsContainer.style.display == "flex"){
        desktopIconsHidder.querySelector("span").innerText = "Show Desktop Icons";
        desktopIconsContainer.style.display = "none";
    } else {
        desktopIconsHidder.querySelector("span").innerText = "Hide Desktop Icons";
        desktopIconsContainer.style.display = "flex";
    }
})
githubIcon.addEventListener("dblclick", e => {
    window.open(githubLink);
})


// Date time
windowsdatetime();
function windowsdatetime(){
    var date_time = new Date();
    var date = date_time.getDate();
    var day = dayNames[date_time.getDay()];
    var month = date_time.getMonth() + 1;
    var year = date_time.getFullYear();
    var hours = date_time.getHours();
    var minutes = date_time.getMinutes();
    if (minutes < 10){
        minutes = "0" + minutes
    }
    var final_date = date + "/" + month + "/" + year;
    var weatherDetailsContent = "Mostly " + day;
    var time = hours + ":" + minutes;
    if(hours > 11){
        time += " PM";
    } else {
        time += " AM";
    }
    if ( hours < 6 || hours > 18){
        weatherImage.setAttribute("src","images/taskbar/left/night.png");
    }
    else{
        weatherImage.setAttribute("src","images/taskbar/left/day.png");
    }
    weatherDetails.style.fontWeight = "bold";
    weatherDetails.innerHTML = weatherDetailsContent;
    document.getElementById("time").innerText = time;
    document.getElementById("date").innerText = final_date;
    document.getElementById("weather-time").innerText = time;
    setTimeout(windowsdatetime,50000);
}

// Right Click Function
window.addEventListener("contextmenu", e => {
    e.preventDefault();
    contextmenu.style.display = "block";
    let x = e.offsetX,
    y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.height,
    cmWidth = contextmenu.offsetWidth,
    cmHeight = contextmenu.offsetHeight;

    if(x > (winWidth - cmWidth - viewMenu.offsetWidth)){
        viewMenu.style.left = "-200px";
    } else {
        viewMenu.style.left = "";
        viewMenu.style.right = "-200px";
    }
    if(x > (winWidth - cmWidth - sortMenu.offsetWidth)){
        sortMenu.style.left = "-200px";
    } else {
        sortMenu.style.left = "";
        sortMenu.style.right = "-200px";
    }
    if(x > (winWidth - cmWidth - newMenu.offsetWidth)){
        newMenu.style.left = "-300px";
    } else {
        viewMenu.style.left = "";
        newMenu.style.right = "-300px";
    }

    x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;

    contextmenu.style.left = `${x}px`;
    contextmenu.style.top = `${y}px`;
    contextmenu.style.zIndex = "5";
    contextmenu.style.display = "block";
})
document.addEventListener("click", () => {
    contextmenu.style.display = "none";
    contextmenu.style.zIndex = "-10";
})

// Refresh Windows
refresh.addEventListener("click", e => {
    window.location.reload();
})

// Taskbar left
function showMore(){
    weather_bar.style.zIndex = "5";
    if (startup_menu.style.bottom == "52px"){
        startup_menu.style.bottom = "-800px";
    }
    weather_bar.style.marginLeft = "15px";
}
function showLess(){
    weather_bar.style.marginLeft = "-700px";
}

// Taskbar middle
//First Icon of the taskbar
startup_btn.addEventListener("click", showStartMenu);
function showStartMenu(){
    startup_menu.style.display = "flex";
    if (startup_menu.style.bottom == "-800px"){
        startup_menu.style.zIndex = "5";
        startup_menu.style.bottom = "52px";
    }
    else{
        startup_menu.style.bottom = "-800px";
    }
}

function universalClick(){
    weather_bar.style.marginLeft = "-700px";
    weather_bar.style.zIndex = "-1";
}