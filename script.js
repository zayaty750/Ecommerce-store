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