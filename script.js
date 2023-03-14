function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.body.style.overflow= "hidden";

  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.body.style.overflow= "auto";
  }
function tes()
{

  document.getElementById("video1").style.width = "100%";
}
window.onscroll = function() {change_style_when_scroll()};
function change_style_when_scroll() {
  if (document.documentElement.scrollTop > 850 && document.documentElement.scrollTop < 2070 || document.documentElement.scrollTop > 2807  ) 
  {
        document.getElementById("change_color_upper_nav").className = "change_color_upper_navtoblack";
        document.getElementById("change_color_upper_nav1").className = "change_color_upper_navtoblack";
        document.getElementById("change_color_upper_nav2").className = "change_color_upper_navtoblack";
        document.getElementById("change_color_upper_nav4").className = "change_color_upper_navtoblack";
    }
    else 
    {
        document.getElementById("change_color_upper_nav").className = "change_color_upper_navtowhite";
        document.getElementById("change_color_upper_nav1").className = "change_color_upper_navtowhite";
        document.getElementById("change_color_upper_nav2").className = "change_color_upper_navtowhite";
        document.getElementById("change_color_upper_nav4").className = "change_color_upper_navtowhite";
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
  document.body.style.overflow= "auto";
  document.getElementById("change_color_upper_nav").style.display = "block";
  document.getElementById("change_color_upper_nav1").style.display = "block";
  document.getElementById("change_color_upper_nav2").style.display = "block";
}