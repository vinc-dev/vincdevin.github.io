class OrderView {
    constructor() {
        this.index = Url.getParameterByName('index');
        this.carService = new CarService();
        this.car = {};
        this.orderForm = new Form($('#order-form')[0]);
    }

    getCarAndColorTemplate(index, car, color) {
        return `
            <div class="columns gallery-container align-center">
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
                </div>
            </div>
        `;
    }

    getCarAndColorComponent() {
        let html = '';

        const car = this.car;

        let color = ``;

        for (let j = 0; j < car.color.length; j++) {
            color += `<span class="color-picker is-` + car.color[j] + `"></span>`;
        }

        html += this.getCarAndColorTemplate(this.index, car, color);

        return html;
    }

    bindCar() {
        this.car = this.carService.data[this.index];

        if (this.index === '' || !this.index || !this.car) window.location.href = 'gallery.html';
    }

    init() {
        this.bindCar();

        $('.gallery-wrapper').append(this.getCarAndColorComponent());
        $('#car-title').html(this.car.name);
        $('#car-price').html(`Rp. ${this.car.price}.00`);
        $('#car-image').attr('src', `./assets/${this.car.image}`);
        $('#car-index').val(this.index);
    }
}

(($) => {
    const orderContainer = new OrderView();
    orderContainer.init();
})(jQuery);