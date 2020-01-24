var time = Date.now();
var currentSlide = 1;

function changeSlides() {
	var now = Date.now();

	if(now - time >= 7000) {
		currentSlide++;
		if(currentSlide > 5) currentSlide = 1;
		document.getElementById("r" + currentSlide).click();
		time = Date.now();
	}

	requestAnimationFrame(changeSlides);
}
changeSlides();

function toggleLinks() {
	var element = document.getElementsByClassName("link-list")[0];

	if(element.style.display == "block")
		element.style.display = "none";
	else
		element.style.display = "block";
}
