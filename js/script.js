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
const swiper = new Swiper('.gallery__swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // spaceBetween: 50,
    loop: false,
    navigation: {
        nextEl: '.gallery__swiper-button-next',
        prevEl: '.gallery__swiper-button-prev',
    },
    pagination: {
        el: '.gallery__swiper-pagination',
        type: 'fraction',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 38,
            slidesPerGroup: 2,
        },
        1008: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },
        1760: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        }
    }
});

// events
// swiper
const swiperEvents = new Swiper('.events__swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 40,
    loop: false,
    navigation: {
        nextEl: '.events__swiper-button-next',
        prevEl: '.events__swiper-button-prev',
    },
    pagination: {
        el: '.events__swiper-pagination',
        clickable: true
    },
    breakpoints: {
        687: {
            slidesPerView: 2,
            spaceBetween: 34,
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
    
// catalog
// accordion
$(".accordion").accordion({
    heightStyle: "content",
    // active: true,
    collapsible: true,
    animate: 500
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

// projects
// swiper
const swiperProjects = new Swiper('.projects__swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // spaceBetween: 50,
    loop: false,
    navigation: {
        nextEl: '.projects__swiper-button-next',
        prevEl: '.projects__swiper-button-prev',
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 33.97,
            slidesPerGroup: 2,
        },
        1008: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 2,
        },
        1750: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
        }
    },
})

// map
ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.760109, 37.591952],
        zoom: 14,
        controls: [],
    });
    var myPlacemark = new ymaps.Placemark([55.760109, 37.591952], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/placemarker.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-2, -40],
    });

    myMap.controls.add('zoomControl', {
        float: 'none',
        position: {
            right: 11,
            top: 300
        }
    }).add('geolocationControl', {
        float: 'none',
        position: {
            right: 11,
            top: 380
        }
    });
    myMap.geoObjects.add(myPlacemark);
}

// contacts
//form
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
        },
    }
});
new JustValidate('.contacts__request-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        mail: {
            required: true,
            email: true
        }
    },
    messages: {
        name: {
            required: "Как вас зовут?",
            minLength: "Недопустимый формат",
        },
        mail: {
            required: "Укажите ваш email",
            function: "Недопустимый формат",
        }
    }
});

const btn = document.querySelectorAll('.gallery__slide-wrap');
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
  })
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

$(document).ready(function() {

	//E-mail Ajax Send
	$(".contacts__request-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Заявка успешна отправлена");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});
