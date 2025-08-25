//::::::::::::::::::::::::::::::::::::::::::::::::::
//Animation scroll to anchor
//::::::::::::::::::::::::::::::::::::::::::::::::::

function scroll_part0(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part0 = document.querySelector('.part0');
    part0.scrollIntoView(options);
}

function scroll_part1(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part1 = document.querySelector('.part1');
    part1.scrollIntoView(options);
}

function scroll_part2(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part2 = document.querySelector('.part2');
    part2.scrollIntoView(options);
}

function scroll_part3(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part3 = document.querySelector('.part3');
    part3.scrollIntoView(options);
}

function scroll_part4(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part4 = document.querySelector('.part4');
    part4.scrollIntoView(options);
}

function scroll_part5(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part5 = document.querySelector('.part5');
    part5.scrollIntoView(options);
}

function scroll_part6(options = { block: "start", inline: "nearest", behavior: "smooth" }) {
    const part6 = document.querySelector('.part6');
    part6.scrollIntoView(options);
}

document.querySelectorAll('.option').forEach(option => {
	option.addEventListener('click', () => {
		const feedbackText = document.getElementById('feedback-text');
		const answer = option.getAttribute('data-answer');

		// Сброс стилей кнопок
		document.querySelectorAll('.option').forEach(btn => {
			btn.classList.remove('correct', 'wrong');
		});

		// Добавление стиля для выбранной кнопки
		if (answer === 'correct') {
			option.classList.add('correct');
			feedbackText.textContent = 'Этого духа звали Nickel — «озорник» на немецком. Он «подбрасывал» искателям меди минерал красного цвета, похожий на медную руду. И, кстати, Джефферсона звали не Ник, а Томас';
		} else {
			option.classList.add('wrong');
			feedbackText.textContent = 'Неправильно, попробуйте еще раз';
		}
	});
});

document.querySelectorAll('.option2').forEach(option2 => {
	option2.addEventListener('click', () => {
		const feedbackText2 = document.getElementById('feedback-text2');
		const answer2 = option2.getAttribute('data-answer2');

		// Сброс стилей кнопок
		document.querySelectorAll('.option2').forEach(btn => {
			btn.classList.remove('correct2', 'wrong2');
		});

		// Добавление стиля для выбранной кнопки
		if (answer2 === 'correct2') {
			option2.classList.add('correct2');
			feedbackText2.textContent = 'Никель — микроэлемент, который необходим всем живым организмам. Роль этого металла в организме изучена не до конца, но известно, что он участвует в ферментативных реакциях и влияет на окислительные процессы. Его среднее содержание в растениях — 0,00005 %, в морских животных чуть меньше — 0,00016 % массы тела, в организме человека 0,0000012 %, а в наземных животных всего 0,000001 %.';
		} else {
			option2.classList.add('wrong2');
			feedbackText2.textContent = 'Неправильно, попробуйте еще раз';
		}
	});
});

document.querySelectorAll('.option3').forEach(option3 => {
	option3.addEventListener('click', () => {
		const feedbackText3 = document.getElementById('feedback-text3');
		const answer3 = option3.getAttribute('data-answer3');

		// Сброс стилей кнопок
		document.querySelectorAll('.option3').forEach(btn => {
			btn.classList.remove('correct3', 'wrong3');
		});

		// Добавление стиля для выбранной кнопки
		if (answer3 === 'correct3') {
			option3.classList.add('correct3');
			feedbackText3.textContent = 'Золото 585 пробы содержит 58,5 % золота, а остальные 41,5 % — это добавки других металлов, таких как медь, серебро или никель, мельхион — сплав меди с никелем, нейзильбер — сплав меди, никеля и цинка, а вот баббит — это сплав из олова, сурьмы и меди.';
		} else {
			option3.classList.add('wrong3');
			feedbackText3.textContent = 'Неправильно, попробуйте еще раз';
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const contents = document.querySelectorAll('.content'); // Находим все блоки
  
	if (!contents.length) return; // Если нет ни одного блока, выходим
  
	const observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('animate'); // Добавляем класс анимации
		  observer.unobserve(entry.target); // Останавливаем наблюдение для этого блока
		}
	  });
	}, { threshold: 0.3 });
  
	contents.forEach(content => observer.observe(content)); // Наблюдаем за каждым блоком
  });
  

  // Функция для отслеживания, когда карточка попадает в область видимости
const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		entry.target.classList.add('visible'); // Добавляем класс для анимации
		observer.unobserve(entry.target); // Останавливаем отслеживание, когда карточка появилась
	  }
	});
  }, { threshold: 0.5 }); // 50% карточки должно быть видно
  
  // Наблюдаем за всеми карточками
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
	observer.observe(card);
  });
  
function switchTab(tabId) {
  // Снять активность со всех вкладок
  document.querySelectorAll('.tab_header_item').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab_item').forEach(content => content.classList.remove('active'));

  // Назначить активную вкладку и контент
  const index = ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7', 'tab8', 'tab9'].indexOf(tabId);
  document.querySelectorAll('.tab_header_item')[index].classList.add('active');
  document.getElementById(tabId).classList.add('active');
}


// анимация чисел роста


document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".animnum");

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const duration = 1500;
    const stepTime = 15;
    const steps = duration / stepTime;
    let current = +counter.getAttribute("data-current");
    const increment = target / steps;

    const updateCount = () => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCount);
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          animateCounter(counter);
          //observer.unobserve(counter); // отключаем наблюдение, чтобы не повторялось
        }
      });
    },
    {
      threshold: 0.6 // срабатывает, когда 60% элемента видно
    }
  );

  counters.forEach(counter => {
    observer.observe(counter);
  });
});




// увеличивает фото по клику с классом open

// Добавляем CSS-анимации
const style = document.createElement('style');
style.textContent = `
  #overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  #overlay.active {
    visibility: visible;
    opacity: 1;
  }

  #overlay img {
    max-height: 90vh;
    max-width: 90vw;
    object-fit: contain;
    border-radius: 1rem;
    transform: scale(0.8);
    opacity: 0;
    transition: transform 0.35s ease, opacity 0.35s ease;
  }

  #overlay.show img {
    transform: scale(1);
    opacity: 1;
  }
`;
document.head.appendChild(style);

// Создание оверлея
const overlay = document.createElement('div');
overlay.id = 'overlay';
const overlayImage = document.createElement('img');
overlay.appendChild(overlayImage);
document.body.appendChild(overlay);

// Открытие картинки
document.querySelectorAll('img.open').forEach(img => {
  img.addEventListener('click', () => {
    overlayImage.src = img.src;
    overlay.classList.add('active');

    // Делаем плавную анимацию после небольшого таймаута (для активации перехода)
    setTimeout(() => {
      overlay.classList.add('show');
    }, 10);
  });
});

// Закрытие
overlay.addEventListener('click', () => {
  overlay.classList.remove('show'); // убираем анимацию
  setTimeout(() => {
    overlay.classList.remove('active'); // затем убираем сам оверлей
  }, 300); // подождём завершения анимации
});

//::::::::::::::::::::::::::::::::::::::::::::::::::
// Большой автослайдер с фото
//::::::::::::::::::::::::::::::::::::::::::::::::::
document.addEventListener('DOMContentLoaded', () => {

  //===== MICRO-SLIDER begin
  const __ms = document.querySelector('.micro-slider');
  const __msSlider = new MicroSlider(__ms, {
    indicators: true,
    indicatorText: '',
    slide_easing: 'ease-in-out' // <--- Добавьте эту строку
  });
  const __msTimer = 3000;
  let __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);

  // Initialize Hammer.js AFTER the element is selected
  // The 'new' keyword for Hammer needs to be capitalized
  const hammer = new Hammer(__ms);


  // Detect gesture tap event with Hammer.js library
  hammer.on('tap', function(e) {
    clearInterval(__msAutoplay);
    console.log(e.type + ' gesture detected. Autoplay stopped.');
  });

  // Detect gesture swipe event with Hammer.js library
  hammer.on('swipe', function(e) {
    clearInterval(__msAutoplay);
    // Restart autoplay after a swipe
    __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
    console.log(e.type + ' gesture detected. Autoplay restarted.');
  });

}); 

//До-после
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.slider-container');
  const beforeWrap = container.querySelector('.before-wrap');
  const beforeImg = container.querySelector('.before-img');
  const handle = container.querySelector('.slider-handle');

  // Ждём полной загрузки изображения
  beforeImg.onload = () => {
    setSizes();
  };

  // В случае если изображение уже было загружено ранее (например, кеш), вызовем setSizes() сразу
  if (beforeImg.complete) {
    setSizes();
  }

  // Установка размеров
  function setSizes() {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    beforeImg.style.width = `${containerWidth}px`;
    beforeImg.style.height = `${containerHeight}px`;
  }

  // Перемещение слайдера
  function moveSlider(e) {
    e.preventDefault();
    const rect = container.getBoundingClientRect();
    let x = (e.clientX || e.touches[0].clientX) - rect.left;
    x = Math.max(0, Math.min(rect.width, x));
    const percent = (x / rect.width) * 100;
    
    beforeWrap.style.width = `${percent}%`;
    handle.style.left = `${percent}%`;
  }

  // Инициализация
  setSizes();
  window.addEventListener('resize', setSizes);

  // События
  handle.addEventListener('mousedown', () => {
    window.addEventListener('mousemove', moveSlider);
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', moveSlider);
    }, {once: true});
  });

  handle.addEventListener('touchstart', (e) => {
    e.preventDefault();
    window.addEventListener('touchmove', moveSlider, {passive: false});
    window.addEventListener('touchend', () => {
      window.removeEventListener('touchmove', moveSlider);
    }, {once: true});
  }, {passive: false});
});

document.addEventListener('DOMContentLoaded', function() {
  const sliderItems = document.querySelectorAll('.future_slider_item');
  const manualButtons = document.querySelectorAll('.manual_btn');
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const sliderContainer = document.querySelector('.future_slider_container');
  let currentSlide = 0;
  let slideInterval;
  let isManualNavigation = false;
  let isSliderInViewport = false;

  // Инициализация слайдера
  function initSlider() {
    sliderItems.forEach((item, index) => {
      item.classList.remove('active');
      manualButtons[index].classList.remove('active');
      radioButtons[index].checked = false;
    });
    
    sliderItems[currentSlide].classList.add('active');
    manualButtons[currentSlide].classList.add('active');
    radioButtons[currentSlide].checked = true;
  }

  // Переключение на конкретный слайд
  function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    initSlider();
    isManualNavigation = true;
    
    // Сбрасываем флаг ручной навигации после задержки
    setTimeout(() => {
      isManualNavigation = false;
    }, 3000);
  }

  // Следующий слайд
  function nextSlide() {
    if (!isManualNavigation && isSliderInViewport) {
      currentSlide = (currentSlide + 1) % sliderItems.length;
      initSlider();
    }
  }

  // Автопрокрутка
  function startAutoSlide() {
    if (!slideInterval && isSliderInViewport) {
      slideInterval = setInterval(nextSlide, 3000);
    }
  }

  // Остановка автопрокрутки
  function stopAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = null;
  }

  // Обработчики для кнопок
  manualButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      goToSlide(index);
      stopAutoSlide();
      startAutoSlide();
    });
    
    button.addEventListener('mouseenter', stopAutoSlide);
    button.addEventListener('mouseleave', startAutoSlide);
  });

  // Обработчики для радио-кнопок
  radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
      goToSlide(index);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  // Пауза при наведении на слайдер
  sliderContainer.addEventListener('mouseenter', stopAutoSlide);
  sliderContainer.addEventListener('mouseleave', startAutoSlide);

  // Intersection Observer для определения видимости слайдера
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Слайдер в области видимости
        isSliderInViewport = true;
        sliderContainer.classList.add('in-viewport');
        startAutoSlide();
      } else {
        // Слайдер вне области видимости
        isSliderInViewport = false;
        sliderContainer.classList.remove('in-viewport');
        stopAutoSlide();
      }
    });
  }, {
    threshold: 0.5 // Срабатывает когда 50% слайдера видно
  });

  // Наблюдаем за слайдером
  observer.observe(sliderContainer);

  // Инициализация
  initSlider();
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button');
  const container = document.querySelector('.hist');
  const histogram = document.querySelector('.histogram');
  const bars = [
      document.querySelector('.bar-1'),
      document.querySelector('.bar-2'), 
      document.querySelector('.bar-3'),
      document.querySelector('.bar-4')
  ];
  const barValues = [
      document.querySelector('.bar-1 .bar-value'),
      document.querySelector('.bar-2 .bar-value'),
      document.querySelector('.bar-3 .bar-value'),
      document.querySelector('.bar-4 .bar-value')
  ];
  
  let currentButtonIndex = 0;
  let autoSwitchInterval;
  let isAutoSwitching = true;
  let resumeTimeout = null;
  const maxBarHeight = 250; // Максимальная высота столбика в пикселях

  // Функция для нормализации значений (масштабирования)
  function normalizeValues(values) {
      const maxValue = Math.max(...values);
      return values.map(value => (value / maxValue) * maxBarHeight);
  }

  // Функция для форматирования чисел
  function formatNumber(value) {
      if (value >= 1000) {
          return value;
      } else if (value >= 10) {
          return value.toFixed(0);
      } else {
          return value.toFixed(1);
      }
  }

  // Функция для установки высоты столбиков
  function setBarsHeight(values) {
      const normalizedHeights = normalizeValues(values);
      
      bars.forEach((bar, index) => {
          if (values[index] !== undefined) {
              // Устанавливаем высоту с анимацией
              bar.style.height = normalizedHeights[index] + 'px';
              // Обновляем значение текста с форматированием
              barValues[index].textContent = formatNumber(values[index]);
          }
      });
  }
  
  // Функция для активации кнопки по индексу
  function activateButton(index) {
      // Убираем активный класс у всех кнопок
      buttons.forEach(btn => btn.classList.remove('active'));
      // Добавляем активный класс выбранной кнопке
      buttons[index].classList.add('active');
      
      // Получаем значения из data-атрибута
      const values = buttons[index].getAttribute('data-values').split(',').map(Number);
      // Устанавливаем новые высоты
      setBarsHeight(values);
      
      currentButtonIndex = index;
  }
  
  // Функция для переключения на следующую кнопку
  function switchToNextButton() {
      let nextIndex = currentButtonIndex + 1;
      if (nextIndex >= buttons.length) {
          nextIndex = 0; // Возвращаемся к первой кнопке
      }
      activateButton(nextIndex);
  }
  
  // Функция для запуска автопереключения
  function startAutoSwitch() {
      if (isAutoSwitching) {
          stopAutoSwitch(); // Останавливаем предыдущий интервал
          autoSwitchInterval = setInterval(switchToNextButton, 2000);
      }
  }
  
  // Функция для остановки автопереключения
  function stopAutoSwitch() {
      clearInterval(autoSwitchInterval);
      if (resumeTimeout) {
          clearTimeout(resumeTimeout);
          resumeTimeout = null;
      }
  }
  
  // Функция для возобновления автопереключения
  function resumeAutoSwitch() {
      isAutoSwitching = true;
      startAutoSwitch();
  }
  
  // Обработчики событий для кнопок
  buttons.forEach((button, index) => {
      button.addEventListener('click', function() {
          // Останавливаем автопереключение и любой ожидающий таймаут
          stopAutoSwitch();
          isAutoSwitching = false;
          
          // Активируем выбранную кнопку
          activateButton(index);
          
          // Запускаем таймер для автоматического возобновления через 3 секунды
          resumeTimeout = setTimeout(function() {
              resumeAutoSwitch();
          }, 3000);
      });
  });
  
  // Обработчики для паузы при наведении
  container.addEventListener('mouseenter', function() {
      stopAutoSwitch();
  });
  
  container.addEventListener('mouseleave', function() {
      if (isAutoSwitching) {
          startAutoSwitch();
      }
  });
  
  // Устанавливаем начальные значения для активной кнопки
  const activeButton = document.querySelector('.button.active');
  if (activeButton) {
      const initialValues = activeButton.getAttribute('data-values').split(',').map(Number);
      // Небольшая задержка для плавного появления анимации при загрузке
      setTimeout(() => {
          setBarsHeight(initialValues);
          // Запускаем автопереключение после загрузки
          startAutoSwitch();
      }, 100);
  }
  
  // Обновляем currentButtonIndex на основе активной кнопки
  buttons.forEach((button, index) => {
      if (button.classList.contains('active')) {
          currentButtonIndex = index;
      }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button-map');
  const buttonsContainer = document.querySelector('.buttons-container');
  const mapContainer = document.querySelector('.map-container');
  const defaultMap = document.querySelector('.map-img[src="map.png"]');
  const zoomMap = document.querySelector('.map-img[src="map_zoom.png"]');
  
  let autoScrollInterval;
  let isPausedByHover = false;
  let isPausedByClick = false;
  let clickPauseTimeout;

  // Добавляем CSS классы для анимации карт
  function addMapStyles() {
      const style = document.createElement('style');
      style.textContent = `
          .map-img {
              transition: opacity 0.5s ease-in-out;
              position: absolute;
              top: 0;
              left: 0;
              width: 80%;
              height: auto;
              object-fit: contain;
              margin: 2rem;
          }
          .map-img.hidden {
              display: none;
              opacity: 0;
          }
          .map-img.visible {
              display: block;
              opacity: 1;
          }
          .map-container {
              position: relative;
              width: 80%;
              height: auto;
              margin: 2rem auto;
          }
      `;
      document.head.appendChild(style);
  }

  // Инициализация карт
  function initializeMaps() {
      if (defaultMap && zoomMap) {
          defaultMap.classList.add('visible');
          defaultMap.classList.remove('hidden');
          zoomMap.classList.add('hidden');
          zoomMap.classList.remove('visible');
      }
  }

  // Переключение на увеличенную карту
  function switchToZoomMap() {
      if (defaultMap && zoomMap) {
          defaultMap.classList.remove('visible');
          defaultMap.classList.add('hidden');
          
          setTimeout(() => {
              zoomMap.classList.remove('hidden');
              zoomMap.classList.add('visible');
          }, 50);
      }
  }

  // Возврат к обычной карте
  function switchToDefaultMap() {
      if (defaultMap && zoomMap) {
          zoomMap.classList.remove('visible');
          zoomMap.classList.add('hidden');
          
          setTimeout(() => {
              defaultMap.classList.remove('hidden');
              defaultMap.classList.add('visible');
          }, 50);
      }
  }

  // Функция для активации конкретной кнопки
  function activateButton(buttonIndex) {
      buttons.forEach((btn, index) => {
          if (index === buttonIndex) {
              btn.classList.add('active');
              btn.style.opacity = '1';
          } else {
              btn.classList.remove('active');
              btn.style.opacity = '0.8';
          }
      });
  }

  // Функция для скрытия ВСЕХ маркеров
  function hideAllMarkers() {
      document.querySelectorAll('.point-map').forEach(point => {
          point.style.display = 'none';
          point.style.opacity = '0';
      });
  }

  // Функция для фильтрации маркеров
  function filterMarkers(filterType) {
      // Сначала скрываем все маркеры
      hideAllMarkers();
      
      switch(filterType) {
          case 'География реновации':
              // НЕ показываем маркеры - оставляем все скрытыми
              break;
          case 'Жилые дома':
              document.querySelectorAll('.triangle-map').forEach(item => {
                  item.style.display = 'flex';
                  setTimeout(() => item.style.opacity = '1', 50);
              });
              break;
          case 'Комфортная среда':
              document.querySelectorAll('.circle-map').forEach(item => {
                  item.style.display = 'flex';
                  setTimeout(() => item.style.opacity = '1', 50);
              });
              break;
          case 'Вне программы':
              document.querySelectorAll('.romb-map').forEach(item => {
                  item.style.display = 'flex';
                  setTimeout(() => item.style.opacity = '1', 50);
              });
              break;
          default:
              // Для других кнопок скрываем все маркеры
              hideAllMarkers();
      }
  }

  // Функция для переключения на следующую кнопку
  function switchToNextButton() {
      const activeButton = document.querySelector('.button-map.active');
      let nextIndex = 0;
      
      buttons.forEach((button, index) => {
          if (button === activeButton) {
              nextIndex = (index + 1) % buttons.length;
          }
      });
      
      activateButton(nextIndex);
      const buttonText = buttons[nextIndex].textContent;
      filterMarkers(buttonText);
      
      // Автоматически переключаем карту при автопрокрутке
      if (buttonText !== 'География реновации') {
          switchToZoomMap();
      } else {
          switchToDefaultMap();
      }
  }

  // Функция для запуска автопрокрутки
  function startAutoScroll() {
      stopAutoScroll();
      autoScrollInterval = setInterval(switchToNextButton, 3000);
  }

  // Функция для остановки автопрокрутки
  function stopAutoScroll() {
      if (autoScrollInterval) {
          clearInterval(autoScrollInterval);
      }
  }

  // Обработчики кликов для кнопок
  buttons.forEach((button, index) => {
      button.addEventListener('click', function() {
          // Останавливаем автопрокрутку при клике
          stopAutoScroll();
          isPausedByClick = true;
          
          // Активируем нажатую кнопку
          activateButton(index);
          
          // Фильтруем маркеры
          const buttonText = this.textContent;
          filterMarkers(buttonText);
          
          // Переключаем карту в зависимости от кнопки
          if (buttonText !== 'География реновации') {
              switchToZoomMap();
          } else {
              switchToDefaultMap();
          }
          
          // Очищаем предыдущий таймаут
          if (clickPauseTimeout) {
              clearTimeout(clickPauseTimeout);
          }
          
          // Запускаем автопрокрутку через 5 секунд
          clickPauseTimeout = setTimeout(() => {
              isPausedByClick = false;
              if (!isPausedByHover) {
                  startAutoScroll();
              }
          }, 5000);
      });
  });

  // Пауза при наведении курсора на контейнер кнопок
  if (buttonsContainer) {
      buttonsContainer.addEventListener('mouseenter', function() {
          isPausedByHover = true;
          stopAutoScroll();
      });

      buttonsContainer.addEventListener('mouseleave', function() {
          isPausedByHover = false;
          if (!isPausedByClick) {
              startAutoScroll();
          }
      });
  }

  if (mapContainer) {
    mapContainer.addEventListener('mouseenter', function() {
        isPausedByHover = true;
        stopAutoScroll();
    });

    mapContainer.addEventListener('mouseleave', function() {
        isPausedByHover = false;
        if (!isPausedByClick) {
            startAutoScroll();
        }
    });
}

  // Активируем первую кнопку по умолчанию при загрузке
  function initializeFirstButton() {
      if (buttons.length > 0) {
          activateButton(0);
          const firstButtonText = buttons[0].textContent;
          filterMarkers(firstButtonText);
          
          // Для первой кнопки показываем соответствующую карту
          if (firstButtonText !== 'География реновации') {
              switchToZoomMap();
          } else {
              switchToDefaultMap();
          }
      }
  }

  // Инициализация
  addMapStyles();
  initializeMaps();
  initializeFirstButton();
  startAutoScroll();
});



//Плитки для комфортной среды
document.addEventListener('DOMContentLoaded', function() {
  const columns = document.querySelectorAll('.comfort_column');
  const columnContainer = document.querySelector('.comfort_container');
  const closeButtons = document.querySelectorAll('.close-btn');
  
  let activeColumn = null;
  
  columns.forEach(column => {
    column.addEventListener('click', function(e) {
      // Не срабатывает при клике на кнопку закрытия
      if (e.target.classList.contains('close-btn')) {
        return;
      }
      
      // Если уже активен этот блок - выходим
      if (this.classList.contains('active')) {
        return;
      }
      
      // Добавляем класс контейнеру для активации стилей
      columnContainer.classList.add('has-active');
      
      // Сбрасываем предыдущий активный блок
      if (activeColumn) {
        activeColumn.classList.remove('active');
      }
      
      // Устанавливаем новый активный блок
      this.classList.add('active');
      activeColumn = this;
      
      // Прокручиваем к активному блоку
      this.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
  
  // Обработка кнопок закрытия
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation(); // Останавливаем всплытие события
      
      const column = this.closest('.comfort_column');
      column.classList.remove('active');
      activeColumn = null;
      
      // Убираем класс с контейнера
      columnContainer.classList.remove('has-active');
      columnContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
  
  // Закрытие при клике вне блоков
  document.addEventListener('click', function(e) {
    if (activeColumn && !e.target.closest('.comfort_container')) {
      activeColumn.classList.remove('active');
      activeColumn = null;
      columnContainer.classList.remove('has-active');
      columnContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});


const images = document.querySelectorAll('.colorize-animation');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observerColor = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    const img = entry.target;
    if (entry.isIntersecting) {
      // Когда изображение входит в область видимости
      // сбрасываем класс, чтобы анимация могла запуститься заново
      img.classList.remove('colorize-active');
      
      // чуть задержки, чтобы браузер успел "увидеть" удаление класса
      // и запустить повторную анимацию
      void img.offsetWidth; // триггер reflow
      img.classList.add('colorize-active');
      
    } else {
      // Когда изображение выходит из области видимости — можно оставить так,
      // или убрать класс, чтобы подготовить к следующему входу
      // например:
      // img.classList.remove('colorize-active');
    }
  });
}, observerOptions);

images.forEach(img => {
  observerColor.observe(img);
});



// Выбираем все элементы 
const elements = document.querySelectorAll('.blockquote_main');

const observerSpin = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        // Удаляем класс 'animate', чтобы можно было запустить заново
        entry.target.classList.remove('animate_spin');
        // Обновляем страницу (force reflow), чтобы браузер заметил изменение класса
        void entry.target.offsetWidth; // принудительный релоад
        // Добавляем класс 'animate' для запуска анимации заново
        entry.target.classList.add('animate_spin');
    } else {
        // Можно оставить пустым или убрать класс при исчезновении,
        // если хотите, чтобы анимация запускалась только при появлении.
    }
});
}, { threshold: 0.5 });

// Навешиваем наблюдение на все выбранные элементы
elements.forEach(el => observerSpin.observe(el));