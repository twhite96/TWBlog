
if (getCookie("theme") == "light"){
	$('html').removeClass("dark");
}
	$(".theme-toggle").click(function(e){
		e.preventDefault();
		$('html').toggleClass("dark");
		if ($('html').hasClass("dark")){
			document.cookie = "theme=dark;path=/";
		}
		else {
			document.cookie = "theme=light;path=/";
		}
	});
