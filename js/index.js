window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        $(".navbar").addClass("navbar-active")
  }
  else{
      $(".navbar").removeClass("navbar-active");
  }
};
