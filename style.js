var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});

// show more

$(".item").slice(0,6).show()
            $(".btn").on("click", function(){
                if ($(".item:hidden").length != 0) {
                     $(".item:hidden").slice(0,6).slideDown()
                     document.getElementById('btn').innerText = 'Show Less';
                }
                else if ($(".itemm:hidden").length == 0) {
                    // $(".col-lg-4").fadeOut('slow')
                     $(".item").slice(6,12).slideUp()
                     document.getElementById('btn').innerText = 'Show More';
                }   
            })


