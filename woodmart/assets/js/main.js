const tabcontent = {
    init: function() {
        this.clickTab('.pofo', '.tabcontent', '.tablinks');
        this.clickTab('.pofolio', '.tabcontent', '.tablinks');
    },
    clickTab: function(wrapper, tabs, buttons) {
        let self = document.querySelector(wrapper);
        if (self === null) return false;
        else {
            let items = self.querySelectorAll(tabs);
            let btns = self.querySelectorAll(buttons);
            btns.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    btns.forEach(btn => btn.classList.remove('active'));
                    items.forEach(item => item.classList.remove('active'));
                    btns[index].classList.add('active');
                    items[index].classList.add('active');
                })
            })
        }


    }
}
tabcontent.init();
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})



const gallery = {
    init: function() {
        gallery.clickFilter();
    },
    clickFilter: function() {
        $('.gallery_masonry').isotope({
            itemSelector: '.gallery__item',
            // layoutMode: 'fitRows'
        });
        $('.gallery-section .gallery__list li').click(function() {
            $('.gallery-section .gallery__list li').removeClass('gallery-active');
            $(this).addClass('gallery-active');
            var selector = $(this).attr('data-filter');
            $('.gallery_masonry').isotope({
                filter: selector
            });
            return false;
        });

    }
}
gallery.init();