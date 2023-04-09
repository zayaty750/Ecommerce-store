

window.addEventListener("load", function(){
    document.getElementById("preloading").style.display = "none";
    document.body.style.overflow = "none";
})

let First_container_width =  308;
function slider_to_right(product_slider)
{
    product_slider.scrollLeft += First_container_width;
}
function slider_to_left(product_slider)
{
    product_slider.scrollLeft -= First_container_width;
}

function openNav() {
    document.getElementById("mySidenav").style.height = "100%";
    document.body.style.overflowY = "hidden";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.height = "0%";
    document.body.style.overflowY = "visible";
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
  document.body.style.overflow = "hidden";

}
function close_search()
{
  document.getElementById("search_nav").style.height = "0px";
  document.body.style.overflowY = "visible";
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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