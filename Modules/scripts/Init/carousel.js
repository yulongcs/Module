'use strict';

(function ($) {
    $(function() {
        $('.owl-carousel').each(function() {
            var $this = $(this);
            var allowAutoPlay = false;
            if ($this.attr('allowAutoPlay')) {
                if ($this.attr('allowAutoPlay').toLowerCase() === 'true') {
                    allowAutoPlay = true;
                }
            }

            var allowSimulateTouch = true;
            if ($this.attr('allowSimulateTouch') &&
                $this.attr('allowSimulateTouch').toLowerCase() === 'false') {
                allowSimulateTouch = false;
            }

            var effect = $this.attr('allowFade') && $this.attr('allowFade').toLowerCase() === 'true' && 'fade' || '';
            var itemsPerPage = 1;
            if ($this.attr('itemsPerPage')) {
                itemsPerPage = parseInt($this.attr('itemsPerPage'), 10);
            }

            var itemsPerPageTable = 1;
            if ($this.attr('itemsPerPageTable')) {
                itemsPerPageTable = parseInt($this.attr('itemsPerPageTable'), 10);
            }

            var itemsSpacing = 0;
            if ($this.attr('itemsSpacing')) {
                itemsSpacing = parseInt($this.attr('itemsSpacing'), 10);
            }

            var allowLoop = true;
            if ($this.attr('allowLoop') && $this.attr('allowLoop').toLowerCase() === 'false') {
                allowLoop = false;
            }

            $this.owlCarousel({
                items: itemsPerPage,
                margin: itemsSpacing,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    480: {
                        items: itemsPerPageTable,
                        nav:false
                    },
                    768: {
                        items: itemsPerPage
                    }
                },
                loop: allowLoop,
                autoplay: allowAutoPlay,
                autoplayTimeout: 3000,
                animateOut: effect !== '' ? effect + 'Out' : false,
                animateIn: effect !== '' ? effect + 'In' : false,
                nav: true,
                navText: [
                    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
                mouseDrag: allowSimulateTouch
            });
        });
    });
})(jQuery);
