class SpecialOffersView {
    constructor() {
        this.selector = $("#special-offers-view");
        this.carService = new CarService();
    }

    getCarAndColorTemplate(car, color) {
        return `
            <div class="is-4">
                <div class="card">
                    <div class="card-header">
                        <img src="./assets/${car.image}" alt="">
                        <div class="overlay"></div>
                    </div>
        
                    <div class="card-body">
                        <div class="card-row">
                            <div class="cr-icon">
                                <img src="./assets/noun_57351_cc.png">
                            </div>
                            <div>${car.transmision}</div>
                        </div>
                        <div class="card-row">
                            <div class="cr-icon">
                                <img src="./assets/iconmonstr-paint-bucket-10-240.png">
                            </div>
                            <div class="colors">
                                ${color}
                            </div>
                        </div>
                        <div class="card-row">
                            <div class="cr-icon">
                                <img src="./assets/90237_227663_dollar_currency.png">
                            </div>
                            <div>
                                ${car.price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getCarAndColorComponent() {
        let html = '';

        for (let i = 0; i < 3; i++) {
            const car = this.carService.getData()[i];

            let color = ``;

            for (let j = 0; j < car.color.length; j++) {
                color += `<span class="color-picker is-` + car.color[j] + `"></span>`;
            }

            html += this.getCarAndColorTemplate(car, color);
        }

        return html;
    }

    init() {
        this.selector.find('.cards').append(this.getCarAndColorComponent());
    }
}

(($) => {
    const specialOfferContainer = new SpecialOffersView();
    specialOfferContainer.init();
})(jQuery);
