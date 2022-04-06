function initCarousel() {
  // ваш код...
	let container  = document.querySelector(".container");
	let arrowRight = container.querySelector(".carousel__arrow_right");  // Кнопка вперед
	let arrowLeft = container.querySelector(".carousel__arrow_left");    // Кнопка назад
	let slider = container.querySelector(".carousel__inner");  	  // Слайдер со всеми слайдами 	

	let viewWidth = container.querySelector(".carousel__slide").offsetWidth;   // Видимая ширина
	let countSlides = container.querySelectorAll(".carousel__slide").length;   //Количество слайдов
	let styleLeft = ''; // смещение  слайдера
	let currentNumSlide = 0; // Текущий номер слайда
	arrowLeft.style.display = 'none'; // Начальная видимость кнопки
  
	arrowRight.addEventListener("click", function () {// Клик на кнопку вперёд
  	currentNumSlide++;
		sliderTransform();	
	});
 
	arrowLeft.addEventListener("click", function () {	// Клик на кнопку назад
  	currentNumSlide--;
		sliderTransform();
	});

	function sliderTransform() { //Видимость кнопок и позиция слайдера
  	if (currentNumSlide < countSlides - 1) { 
			arrowRight.style.display = '';
  	} else { 
				arrowRight.style.display = 'none';
		}

    if (currentNumSlide > 0) { 
			arrowLeft.style.display = '';
    } else { 
				arrowLeft.style.display = 'none';
    }

    styleLeft = -currentNumSlide * viewWidth + "px";
		slider.style.transform = 'translateX(' + styleLeft + ')';
	
	}
}
