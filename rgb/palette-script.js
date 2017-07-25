var redSwatch    = document.getElementById("red-swatch"),
	greenSwatch	 = document.getElementById("green-swatch"),
	blueSwatch   = document.getElementById("blue-swatch"),
	redSlider 	 = document.getElementById("red-slider"),
	greenSlider  = document.getElementById("green-slider"),
	blueSlider   = document.getElementById("blue-slider"),
	redInput 	 = document.getElementById("red-input"),
	greenInput   = document.getElementById("green-input"),
	blueInput    = document.getElementById("blue-input"),
	header		 = document.querySelector("h1"),
	toggleMenu 	 = document.getElementById("toggle-menu"),
    menuClosed 	 = true,
    mode	   	 = document.getElementsByClassName("mode"),
    modal 	   = document.querySelector(".modal-container"),
    help	   = document.querySelector(".fa-question"),
    closeModal = document.querySelector(".modal-close i"),

    sliders 	 = document.querySelectorAll("input[type=range]");
    inputs		 = document.querySelectorAll("input[type=number]");
    swatches	 = document.querySelectorAll(".color-swatch");

startPalette();

function startPalette() {
	toggleMenu.addEventListener("click", function() {
			if (menuClosed) {
				toggleMenu.classList.remove("fa-plus");
				toggleMenu.classList.add("fa-times");
				document.getElementById("menu-content").classList.remove("menu-closed");
				document.getElementById("menu-content").classList.add("menu-open");
				menuClosed = false;
			} else {
				toggleMenu.classList.remove("fa-times");
				toggleMenu.classList.add("fa-plus");
				document.getElementById("menu-content").classList.remove("menu-open");
				document.getElementById("menu-content").classList.add("menu-closed");
				menuClosed = true;
			}
		});
	for (var i = 0; i < mode.length; i ++) {
		mode[i].addEventListener("click", function() {
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
		});
	}

	help.addEventListener("click", function() {
		modal.style.visibility = "visible";
	});

	closeModal.addEventListener("click", function() {
		modal.style.visibility = "hidden";
	});

	header.addEventListener("change", function() {
		if (header.style.backgroundColor === "rgb(255, 255, 255)") {
			header.style.color = formatRGB(0, 0, 0);
		}
	});

	for (let i = 0; i < sliders.length; i ++) {
		sliders[i].addEventListener("change", function() {
			swatches[i].style.backgroundColor = formatRGBWithIndex(i, this.value);
			inputs[i].value = this.value;
			header.style.backgroundColor = formatRGB(inputs[0].value, inputs[1].value, inputs[2].value);
			changeHeaderColor();
		});
	}

	for (let i = 0; i < inputs.length; i ++) {
		inputs[i].addEventListener("change", function() {
			if (!isValid(this.value)) {
				this.value = 0;
			}
			swatches[i].style.backgroundColor = formatRGBWithIndex(i, this.value);
			sliders[i].value = this.value;
			header.style.backgroundColor = formatRGB(inputs[0].value, inputs[1].value, inputs[2].value);
			changeHeaderColor();
		});
	}

}

document.getElementById("newColors").addEventListener("click", function() {
	reset();
});

function reset() {
	header.style.backgroundColor = formatRGB(0, 0, 0);
	redSwatch.style.backgroundColor = formatRGB(0, 0, 0);
	greenSwatch.style.backgroundColor = formatRGB(0, 0, 0);
	blueSwatch.style.backgroundColor = formatRGB(0, 0, 0);
	redInput.value = 0;
	greenInput.value = 0;
	blueInput.value = 0;
	redSlider.value = 0;
	greenSlider.value = 0;
	blueSlider.value = 0;
	changeHeaderColor();
}

function changeHeaderColor() {
	if (isWhite()) {
		header.style.color = formatRGB(0, 0, 0);
		redInput.style.color = formatRGB(0, 0, 0);
		greenInput.style.color = formatRGB(0, 0, 0);
		blueInput.style.color = formatRGB(0, 0, 0);
	} else {
		header.style.color = formatRGB(255, 255, 255);
		redInput.style.color = formatRGB(255, 255, 255);
		greenInput.style.color = formatRGB(255, 255, 255);
		blueInput.style.color = formatRGB(255, 255, 255);
	}
}

function formatRGBWithIndex(index, value) {
	if (index == 0) {
		return formatRGB(value, 0, 0);
	} else if (index == 1) {
		return formatRGB(0, value, 0);
	} else if (index == 2) {
		return formatRGB(0, 0, value);
	} else {
		return -1;
	}
}

function formatRGB(r, g, b) {
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function isWhite() {
	return redInput.value == 255 && greenInput.value == 255 && blueInput.value == 255;
}

function isValid(number) {
	return number >= 0 && number <= 255;
}
