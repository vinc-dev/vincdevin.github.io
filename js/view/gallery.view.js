class GalleryView {
    constructor() {
        this.carService = new CarService();
    }

    getCarAndColorTemplate(index, car, color) {
        return `
            <div class="columns gallery-container">
                <div class="is-4">
                    <img src="./assets/${car.image}" class="gallery-img">
                </div>
                <div class="is-8">
                    <div class="columns">
                        <div class="is-3 text-bold">Name</div>
                        <div class="is-9">${car.name}</div>
                    </div>
                    <div class="columns">
                        <div class="is-3 text-bold">Brand</div>
                        <div class="is-9">${car.brand}</div>
                    </div>
                    <div class="columns">
                        <div class="is-3 text-bold">Transmission</div>
                        <div class="is-9">${car.transmision}</div>
                    </div>
                    <div class="columns">
                        <div class="is-3 text-bold">Color's</div>
                        <div class="is-9 gallery-colors">${color}</div>
                    </div>
                    <div class="columns">
                        <div class="is-3 text-bold">Description</div>
                        <div class="is-9">${car.description}</div>
                    </div>
                    <a href="order.html?index=${index}" class="button is-primary hover-is-primary-darker"><span>Order</span></a>
                </div>
            </div>
        `;
    }

    getCarAndColorComponent() {
        let html = '';

        for (let i = 0; i < this.carService.getData().length; i++) {
            const car = this.carService.getData()[i];

            let color = ``;

            for (let j = 0; j < car.color.length; j++) {
                color += `<span class="color-picker is-` + car.color[j] + `"></span>`;
            }

            html += this.getCarAndColorTemplate(i, car, color);
        }

        return html;
    }

    init() {
        $('.gallery-wrapper').append(this.getCarAndColorComponent());
    }
}

(($) => {
    const galleryContainer = new GalleryView();
    galleryContainer.init();
})(jQuery);
