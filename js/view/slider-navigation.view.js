class SliderNavigationView {
    constructor() {
        this.selector = $("#slider-navigation-view");
    }

    bindHandler() {
        const sliderView = new SliderView();

        this.selector.find('.is-right').on('click', (e) => {
            sliderView.next();
        });

        this.selector.find('.is-left').on('click', (e) => {
            sliderView.prev();
        });
    }

    init() {
        this.bindHandler();
    }
}

(($) => {
    const sliderNavigationContainer = new SliderNavigationView();
    sliderNavigationContainer.init();
})(jQuery);
