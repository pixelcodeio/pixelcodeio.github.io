function bezier(t) { 
  return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 
}

window.onload = function() {
  var navbar = document.getElementById("navbar");
  var elementTarget = document.getElementById("section-2");
  var max1 = 3.0;
  var max2 = 6.0;
  if (window.scrollY < 400) {
    max1 = 3.0 * bezier(window.scrollY / 400.0);
    max2 = 6.0 * bezier(window.scrollY / 400.0);
    max1 = max1.toString();
    max2 = max2.toString();
    navbar.style.boxShadow = "0 "+ max1 +"px "+ max2 +"px 0 #dbdbdb";
  } else {
    navbar.style.boxShadow = "0 3px 6px 0 #dbdbdb";
  }
  window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var elementTarget = document.getElementById("section-2");
    var max1 = 3.0;
    var max2 = 6.0;
    if (window.scrollY < 400) {
      max1 = 3.0 * bezier(window.scrollY / 400.0);
      max2 = 6.0 * bezier(window.scrollY / 400.0);
      max1 = max1.toString();
      max2 = max2.toString();
      navbar.style.boxShadow = "0 "+ max1 +"px "+ max2 +"px 0 #dbdbdb";
    } else {
      navbar.style.boxShadow = "0 3px 6px 0 #dbdbdb";
    }
  });
  document.querySelector( "#nav-toggle" )
    .addEventListener( "click", function() {
      this.classList.toggle( "active" );
    });
}

function go_to(id) {
  $('html,body').animate({
    scrollTop: $(id).offset().top},
    'slow');
}
