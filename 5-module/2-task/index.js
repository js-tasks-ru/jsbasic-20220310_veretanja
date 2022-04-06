function toggleText() {
  // ваш код...
  var button = document.querySelector("button");
  var divtext = document.querySelector("#text");

  button.addEventListener("click", function() {
	if (divtext.hidden) {
		divtext.hidden = false
	 } else {divtext.hidden = true }
  })

}
