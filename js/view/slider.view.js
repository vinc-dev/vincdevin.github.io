class SliderView {
    constructor() {
        this.sliderService = new SliderService();
        this.currIndex = 0;
        this.timer = 8000;
        this.animationFrameId = -1;
    }

    update() {
        this.updateSliderComponent();
    }

    next() {
        const maxMove = $("#slider-view > .slide-item").length - 1;
        if (this.currIndex >= maxMove) {
            this.currIndex = 0;
        }
        else {
            this.currIndex += 1;
        }

        this.update();
    }

    prev() {
        const maxMove = $("#slider-view > .slide-item").length - 1;
        if (this.currIndex <= 0) this.currIndex = maxMove;
        else this.currIndex -= 1;

        this.update();
    }

    getSliderTemplate(slide) {
        return `
            <div class="slide-item">
                <div class="slide-item-overlay"></div>
                <img src="./assets/${slide.image}" alt="banner">
			</div>
        `;
    }

    getSliderComponent() {
        let html = '';

        this.sliderService.getData().forEach((slide) => {
            html += this.getSliderTemplate(slide);
        });

        return html;
    }

    updateSliderComponent() {
        const selector = $("#slider-view > .slide-item");

        selector.each((index, el) => {
            $(el).removeClass('active');
            if (index === this.currIndex) {
                $(el).addClass('active');
            }
        });
    }

    updateCurrIndex(firstMove = true) {
        if (firstMove) this.currIndex = 0;
        else {
            const maxMove = $("#slider-view > .slide-item").length - 1;
            if (this.currIndex >= maxMove) {
                this.currIndex = 0;
            }
            else {
                this.currIndex += 1;
            }
        }

        this.updateSliderComponent();

        this.animationFrameId = setTimeout(() => {
            this.updateCurrIndex(false);
        }, this.timer);
    }

    bindSliding() {
        this.updateCurrIndex();
    }

    init() {
        $("#slider-view").html(this.getSliderComponent());
        this.bindSliding();
    }
}

(($) => {
    const sliderContainer = new SliderView();
    sliderContainer.init();
})(jQuery);
