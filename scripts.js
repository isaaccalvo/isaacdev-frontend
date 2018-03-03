$(document).ready(function(){
// menu-i active class selection  
  $(".menu-i").click(function(){ 
    if($(this).siblings("active")){
      $(this).siblings().removeClass("active");
      $(this).addClass("active");
    }
  });  

});