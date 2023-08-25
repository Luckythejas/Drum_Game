// detecting_button_press

var numberofbutton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofbutton; i++) {

	document.querySelectorAll(".drum")[i].addEventListener("click", function() {

		var buttonInnerHTML = this.innerHTML;
		makeSound(buttonInnerHTML);
		buttonanimation(buttonInnerHTML);

	});

	// detecting)key_press

	document.addEventListener("keydown", function(event) {
		makeSound(event.key);
		buttonanimation(event.key);
	})

	// function_of_keys

	function makeSound(key) {

		switch (key) {

			case "w":
				var tom1 = new Audio("sounds/tom-1.mp3");
				tom1.play();
				break;

			case "a":
				var tom2 = new Audio("sounds/tom-2.mp3");
				tom2.play();
				break;

			case "s":
				var tom3 = new Audio("sounds/tom-3.mp3");
				tom3.play();
				break;

			case "d":
				var tom4 = new Audio("sounds/tom-4.mp3");
				tom4.play();
				break;

			case "j":
				var snare = new Audio("sounds/snare.mp3");
				snare.play();
				break;

			case "k":
				var crash = new Audio("sounds/crash.mp3");
				crash.play();
				break;

			case "l":
				var kickbass = new Audio("sounds/kick-bass.mp3");
				kickbass.play();
				break;

			default:

		}

	}
	// button_animation

	function buttonanimation(currentkey) {

		var activeButton = document.querySelector("." + currentkey);
		activeButton.classList.add("pressed");
		setTimeout(function() {
			activeButton.classList.remove("pressed");
		}, 100)

	}
}
