

window.addEventListener("load", function(){
    document.getElementById("preloading").style.display = "none";
    document.body.style.overflow = "none";
})

  function change_heart(heart)
  {
    if(heart.className != "fa-solid fa-heart")
    {
      heart.style.color ="#ff0000";
      heart.className = "fa-solid fa-heart";
    }
    else 
    {
      heart.style.color ="black";
      heart.className = "bi-heart";
    }
  } 
  
  First_container_width =  325*4;
 function slider_to_right(product_slider)
  {
    product_slider.scrollLeft += First_container_width ;   
  }
 
 function slider_to_left(product_slider)
  {
    product_slider.scrollLeft -= First_container_width ;   
  }

  function openNav() 
  {
    document.getElementById("mySidenav").style.height = "100%";
    document.body.style.overflowY = "hidden";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.height = "0%";
    document.body.style.overflowY = "visible";
  }

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
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {when_scroll()};

function when_scroll() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    document.getElementById("top_function_button").style.display = "block";
  } else {
    document.getElementById("top_function_button").style.display = "none";
  }
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