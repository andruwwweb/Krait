document.addEventListener('DOMContentLoaded', () => {
    //Первый слайдер
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 2000,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //Фото на карточке товара
    const product = new Swiper('.prod-swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        pagination: {
            el: '.prod-pagination',
            type: 'bullets',
        },
    })
    //Слайдер с кольцами
    const ringsSlider = new Swiper('.rings-swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.next-btn-rings',
            prevEl: '.prev-btn-rings',
        },
    })

    //Переключение активных классов формуляров
    let links = document.querySelectorAll('.filter-link');
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            link.classList.add('active-link');
            if (e.target.classList.contains('active-link')) {
                links.forEach(item => {
                    if (item !== e.target) {
                        item.classList.remove('active-link')
                    }
                })
            }
        })
    })


})