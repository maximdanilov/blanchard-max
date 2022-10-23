// burger events
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.close-link');
let topHeader = document.querySelector('.header__top');

burger.addEventListener('click', function (){
  document.body.classList.toggle('stop-scroll');
  burger.classList.toggle('header__burger--active');
  burger.setAttribute("aria-expanded", "true");
  menu.classList.toggle('header__nav--active');
  topHeader.classList.toggle('header-top--active');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    document.body.classList.remove('stop-scroll');
    burger.classList.remove('header__burger--active');
    burger.setAttribute("aria-expanded", "false");
    menu.classList.remove('header__nav--active');
    topHeader.classList.remove('header__top--active');
  })
})

// header-top search
let openBtn = document.querySelector('.header__search-mobile-open');
let closeBtn = document.querySelector('.header__form-mobile-close');
let inputSearch = document.querySelector('.header__form-mobile');

openBtn.addEventListener('click', function () {
  inputSearch.classList.add('header__form-mobile--active');
});

closeBtn.addEventListener('click', function () {
  inputSearch.classList.remove('header__form-mobile--active');
})

// dropdown scroll
const bars = document.querySelectorAll('[data-simplebar]')

bars.forEach(el => {
  new SimpleBar(el, {
    ariaLabel: 'Прокручиваемая область',
  });
  el.querySelector('.simplebar-content-wrapper').setAttribute('tabindex', '-1');
});

// header-bottom dropdown
const menuBtn = document.querySelectorAll('.header__btn-tab');
const drops = document.querySelectorAll('.header__tab-dropdown');

menuBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let currentBtn = e.currentTarget;
    let currentDrop = currentBtn.closest('.header__bottom-menu-item').querySelector('.header__tab-dropdown');

    menuBtn.forEach(function (el) {
      if (el !== currentBtn) {
        el.classList.remove('header__btn-tab--active');
        el.setAttribute("aria-expanded", "false");
      }
    });

    drops.forEach(function (el) {
      if (el !== currentDrop) {
        el.classList.remove('header__tab-dropdown--active');
        el.setAttribute("aria-hidden", "true");
      }
    });

    currentDrop.classList.toggle('header__tab-dropdown--active');
    currentDrop.setAttribute("aria-hidden", "false");
    currentBtn.classList.toggle('header__btn-tab--active');
    currentBtn.setAttribute("aria-expanded", "true");
  });
});

document.addEventListener('click', function (e) {
  if (!e.target.closest('.header__bottom-menu-list')) {

    menuBtn.forEach(function (el) {
      el.classList.remove('header__btn-tab--active');
      el.setAttribute("aria-expanded", "false");
    });

    drops.forEach(function (el) {
      el.classList.remove('header__tab-dropdown--active');
      el.setAttribute("aria-hidden", "true");
    });
  }
});

// gallery
// select
const elemenGallery = document.querySelector('#gallery__select');
const choiceGallery = new Choices(elemenGallery, {
    searchEnabled: false,
    // position: 'bottom'
});

// swiper

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".gallery__slides-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    pagination: {
      el: ".gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__btn-next",
      prevEl: ".gallery__btn-prev"
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesPerGroup: 2,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 2,
      },
      1760: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
    }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    }
  })
})

$(document).ready(function () {
    $('.gallery__slide').click(function (e) {
        e.preventDefault();
    })
})

const btn = document.querySelectorAll('.gallery__slide');
const modal = document.querySelector('.modal__list');
const notes = document.querySelectorAll('.modal__item');
const exitBtn = document.querySelectorAll('.modal__btn-close');

btn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    document.body.classList.toggle('stop-scroll');

    let path = e.currentTarget.getAttribute('data-path');

    notes.forEach(function (el) {
     el.classList.remove('modal__item--active');
    })

    document.querySelector(`[data-gallery="${path}"]`).classList.add('modal__item--active');
    modal.classList.add('modal__list--active');

    setTimeout(function() {
      let activeModal = document.querySelector('.modal__item--active');
      activeModal.querySelector('.modal__btn-close').focus();
    }, 4000);
  });
});

exitBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.body.classList.remove('stop-scroll');
    modal.classList.remove('modal__list--active');
    notes.classList.remove('modal__item--active');
  });
})

modal.addEventListener('click', function (el){
  if (el.target === modal) {
    notes.forEach(function (el) {
      el.classList.remove('modal__item--active');
    })
    document.body.classList.remove('stop-scroll');
    modal.classList.remove('modal__list--active');
  }
})

document.addEventListener('keydown', function (e){
  if (e.key === 'Escape') {
    notes.forEach(function (el) {
      el.classList.remove('modal__item--active');
    })
    document.body.classList.remove('stop-scroll');
    modal.classList.remove('modal__list--active');
  }
})

// catalog
document.addEventListener('DOMContentLoaded', function () {
  $( ".accordion" ).accordion({
      collapsible: true,
      active: 0,
      icons: false,
      heightStyle: '.catalog__bottom-list-wrap'
    });
});

document.querySelectorAll('.catalog__item-top').forEach(function (el) {
  el.addEventListener('mousedown', e => e.preventDefault());
});

// tab
document.querySelectorAll('.catalog__bottom-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.catalog__bottom-btn').forEach(function (btn) {
          btn.classList.remove('catalog__bottom-btn--active')
      });
      e.currentTarget.classList.add('catalog__bottom-btn--active');
      document.querySelectorAll('.catalog__content-info').forEach(function (tabsBtn) {
          tabsBtn.classList.remove('catalog__content-info--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content-info--active');
  });
});

$(document).ready(function(){

	$('.catalog__bottom-btn').click(function(e){
		e.preventDefault();

		let href = $(this).attr('href');
		let offset = $(href).offset().top - $('.header').outerHeight();
        console.log(offset)
		$('body, html').animate({
			scrollTop: offset,
		}, 500);
	});
});

// events
const swiperEvents = new Swiper('.events__swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
        nextEl: '.events-btn-next',
        prevEl: '.events-btn-prev',
    },
    pagination: {
        el: '.events__swiper-pagination',
        clickable: true
    },
    breakpoints: {
        659: {
            slidesPerView: 2,
            spaceBetween: 24,
            slidesPerGroup: 2,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 27,
            slidesPerGroup: 3,
        },
        1761: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        },
    }
});

// projects
const swiperProjects = new Swiper('.projects__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // spaceBetween: 50,
    loop: false,
    navigation: {
        nextEl: '.project-btn-next',
        prevEl: '.project-btn-prev',
    },
    pagination: {
      el: '.projects__swiper-pagination',
      clickable: true
    },
    breakpoints: {
        688: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1009: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1281: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    },
})

// projects
tippy('.projects__tooltip', {
    trigger: 'click',
    theme: 'tooltip',
    maxWidth: 350,
  });

// contacts
ymaps.ready(init);
function init() {
  const mapElem = document.querySelector("map");
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.760109, 37.591952],
      zoom: 14,
      controls: ["geolocationControl", "zoomControl"]
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "300px", right: "20px" },
      geolocationControlFloat: "none",
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "200px", right: "20px" }
    }
  );

  if (window.matchMedia("(max-width: 1280px)").matches) {
    if (Object.keys(myMap.controls._controlKeys).length) {
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('geolocationControl');
    }
  }

  myMap.behaviors.disable("scrollZoom");

  myMap.events.add("sizechange", function (e) {
    if (window.matchMedia("(max-width: 1280px)").matches) {
      if (Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('geolocationControl');
      }
    } else {
      if (!Object.keys(myMap.controls._controlKeys).length) {
        myMap.controls.add('zoomControl');
        myMap.controls.add('geolocationControl');
      }
    }
  });

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: 'img/placemarker.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-2, -40]
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}

// contacts

let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

new JustValidate('.contacts__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        }
    },
    messages: {
        name: {
            required: "Как вас зовут?",
            minLength: "Недопустимый формат",
        },
        tel: {
            required: "Укажите ваш телефон",
            function: "Недопустимый формат",
        }
    },
}).onSuccess((event) => {
    console.log('Валидация отправлена');
    console.log(event);
    let formData = new FormData(event.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('Отправено');
            }
        }
    }

    xhr.open('Post', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
});