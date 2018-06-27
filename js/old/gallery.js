let renderHTML = (car) => {
    console.log(car);

    let color = ``;

    for (let j = 0; j < car.color.length; j++) {
        color += `
			<span class="color-picker is-` + car.color[j] + `"></span>
		`;
    }

    let html = `
		<div class="columns gallery-container">
			<div class="is-4">
				<img src="./assets/` + car.image + `" class="gallery-img">
			</div>
			<div class="is-8" style="padding: 0 25px;">
				<div class="columns">
					<div class="is-3 is-bold"> Name </div>
					<div class="is-9"> ` + car.name + ` </div>
				</div>
				<div class="columns">
					<div class="is-3 is-bold"> Brand </div>
					<div class="is-9"> ` + car.brand + ` </div>
				</div>
				<div class="columns">
					<div class="is-3 is-bold"> Transmission </div>
					<div class="is-9"> ` + car.Transmision + ` </div>
				</div>
				<div class="columns">
					<div class="is-3 is-bold"> Color's </div>
					<div class="is-9 gallery-colors"> ` + color + ` </div>
				</div>
				<div class="columns">
					<div class="is-3 is-bold"> Description </div>
					<div class="is-9"> ` + car.description + ` </div>
				</div>
			</div>
		</div>
	`;

    return html;
};

$(function() {
    let html = ``;

    for (let i = 0; i < cars.length; i++) {
        html += renderHTML(cars[i]);
    }

    $('.gallery-wrapper').append(html);
});
