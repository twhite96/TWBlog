$(document).ready(function() {
    // main menu toggle
    var toggleButton = document.getElementById("menu-toggle");
    var menu = document.getElementById("primary-nav");

    if (toggleButton && menu) {
        toggleButton.addEventListener("click", function() {
            menu.classList.toggle("js-menu-is-open");
        });
    }

    // initialize smooth scroll
    // initialize smooth scroll
    $("a").smoothScroll({
        offset: -20,
        preventDefault: false
    });

    $("img").click(function(e) {
            e.preventDefault();
        })
        // add lightbox class to all image links
    $("a[href$='.jpg'], a[href$='.png'], a[href$='.gif'], a[href$='.webp']").attr("data-lity", "");
});