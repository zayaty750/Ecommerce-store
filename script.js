
 
window.addEventListener("load", function(){
    document.getElementById("preloading").style.display = "none";
})
function openNav() {
    document.getElementById("mySidenav").style.width = "20%";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.body.style.backgroundColor = "white";
  }
function tes()
{

  document.getElementById("video1").style.width = "100%";
}
window.onscroll = function() {change_style_when_scroll()};
function change_style_when_scroll() {


  if (document.documentElement.scrollTop > 550) 
  {
        
        document.getElementById("container").style.opacity = "1";  
        document.getElementById("container").style.translate = "0px"; 

        document.getElementById("container1").style.opacity = "1"; 
        document.getElementById("container1").style.translate = "0px"; 

        document.getElementById("container2").style.opacity = "1";  
        document.getElementById("container2").style.translate = "0px";  
        
        document.getElementById("container3").style.opacity = "1"; 
        document.getElementById("container3").style.translate = "0px"; 
        
        document.getElementById("container4").style.opacity = "1";  
        document.getElementById("container4").style.translate = "0px";  
          

        document.getElementById("change_color_upper_nav").className = "change_color_upper_navtoblack";
        document.getElementById("change_color_upper_nav1").className = "change_color_upper_navtoblack";
        document.getElementById("change_color_upper_nav2").className = "change_color_upper_navtoblack";
        document.getElementById("change_color_upper_nav4").className = "change_color_upper_navtoblack";
    }
    else 
    {
      document.getElementById("container").style.opacity = "0";  
      document.getElementById("container").style.translate = "-1000px"; 

      document.getElementById("container1").style.opacity = "0"; 
      document.getElementById("container1").style.translate = "-1000px"; 

      document.getElementById("container2").style.opacity = "0";  
      document.getElementById("container2").style.translate = "-1000px"; 
      
      document.getElementById("container3").style.opacity = "0"; 
      document.getElementById("container3").style.translate = "-1000px";
      
      document.getElementById("container4").style.opacity = "0";  
      document.getElementById("container4").style.translate = "-1000px";  

        document.getElementById("change_color_upper_nav").className = "change_color_upper_navtowhite";
        document.getElementById("change_color_upper_nav1").className = "change_color_upper_navtowhite";
        document.getElementById("change_color_upper_nav2").className = "change_color_upper_navtowhite";
        document.getElementById("change_color_upper_nav4").className = "change_color_upper_navtowhite";
    }
    if(document.documentElement.scrollTop > 1000)
    {
      document.getElementById("change_color_upper_nav").className = "change_color_upper_navtoblack";
      document.getElementById("change_color_upper_nav1").className = "change_color_upper_navtoblack";
      document.getElementById("change_color_upper_nav2").className = "change_color_upper_navtoblack";
      document.getElementById("change_color_upper_nav4").className = "change_color_upper_navtoblack";
    }
    else
    {

    }
}

let myindex = 0;
function showSlides() 
{
  let slides = document.getElementsByClassName("mySlides");
  for(let i =0 ;i<slides.length;i++)
    slides[i].style.display = "none";
  
  if(myindex > slides.length-1)
  myindex = 0
  slides[myindex].style.display = "block";
  myindex++;

  setTimeout(showSlides, 5000);
}
setTimeout(showSlides, 1000);

function open_search()
{
  document.getElementById("search_nav").style.height = "100%";
  document.getElementById("change_color_upper_nav").className = "change_color_upper_navtoblack";
  document.getElementById("change_color_upper_nav1").className = "change_color_upper_navtoblack";
  document.getElementById("change_color_upper_nav2").className = "change_color_upper_navtoblack";
  document.getElementById("change_color_upper_nav4").className = "change_color_upper_navtoblack";
  document.body.style.overflow= "hidden";
  document.getElementById("change_color_upper_nav").style.display = "none";
  document.getElementById("change_color_upper_nav1").style.display = "none";
  document.getElementById("change_color_upper_nav2").style.display = "none";
}
function close_search()
{
  document.getElementById("search_nav").style.height = "0px";
  document.getElementById("change_color_upper_nav").className = "change_color_upper_navtowhite";
  document.getElementById("change_color_upper_nav1").className = "change_color_upper_navtowhite";
  document.getElementById("change_color_upper_nav2").className = "change_color_upper_navtowhite";
  document.getElementById("change_color_upper_nav4").className = "change_color_upper_navtowhite";
  document.body.style.overflowY= "auto";
  document.getElementById("change_color_upper_nav").style.display = "block";
  document.getElementById("change_color_upper_nav1").style.display = "block";
  document.getElementById("change_color_upper_nav2").style.display = "block";
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function load()
{
  document.getElementById("word").style.transition = "3s ease-in-out";
  document.getElementById("word").style.transform = "rotate(360deg)";
  document.getElementById("word").style.opacity = "1";

  document.getElementById("word2").style.transitionDelay = "4s";
  document.getElementById("word2").style.transition = "3s ease-in-out";
  document.getElementById("word2").style.transform = "rotate(360deg)";
  document.getElementById("word2").style.opacity = "1";

  document.getElementById("word3").style.transitionDelay = "5s";
  document.getElementById("word3").style.transition = "4s ease-in-out";
  document.getElementById("word3").style.transform = "rotate(360deg)";
  document.getElementById("word3").style.opacity = "1";
}


//Date script.
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

(function populateMonths() {
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement("option");
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    monthSelect.value = "January";
})();

let previousDay;

function populateDays(month) {
    while (daySelect.firstChild) {
        daySelect.removeChild(daySelect.firstChild);
    }
    let dayNum;
    let year = yearSelect.value;

    if (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
        dayNum = 31;
    }
    else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
        dayNum = 30;
    }
    else {
        if (new Date(year, 1, 29).getMonth() === 1) {
            dayNum = 29;
        }
        else {
            dayNum = 28;
        }
    }
    for (let i = 1; i <= dayNum; i++) {
        const option = document.createElement("option");
        option.textContent = i;
        daySelect.appendChild(option);
    }
    if (previousDay) {
        daySelect.value = previousDay;
        if (daySelect.value === "") {
            daySelect.value = previousDay - 1;
        }
        if (daySelect.value === "") {
            daySelect.value = previousDay - 2;
        }
        if (daySelect.value === "") {
            daySelect.value = previousDay - 3;
        }
    }
}


function populateYears() {
    let year = new Date().getFullYear();
    for (let i = 0; i < 101; i++) {
        const option = document.createElement("option");
        option.textContent = year - i;
        yearSelect.appendChild(option);
    }
}

populateDays(monthSelect.value);
populateYears();

yearSelect.onchange = function () {
    populateDays(monthSelect.value);
}
monthSelect.onchange = function () {
    populateDays(monthSelect.value);
}
daySelect.onchange = function () {
    previousDay = daySelect.value;
}

//Validation script.
const firstname=document.getElementById('fname');
if(firstname.value===''){
    errors.push('First Name is Required');
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
        sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else
        sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}


function show_login()
{

    document.getElementById("Register").style.display = "none";
}
function show_registration()
{
    document.getElementById("Login").style.display = "none";
    document.getElementById("Register").style.display = "block";
}