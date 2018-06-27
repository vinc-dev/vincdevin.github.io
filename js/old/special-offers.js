let renderHTML = (car) => {
	/* TERIMA PARAMETER BERUPA
	 - IMAGE
	 - TRANSMISSION TYPE
	 - COLORS
	 - PRICE
	 KEMUDIAN DATA DI SESUAI KAN DI MASING-MASING TEMPAT
	 UNTUK COLOR, TERIMANYA ARRAY / OBJECT JADI BISA LBH DARI 1 WARNA, 
	 	KEMUDIAN RENDER SPANNYA DI LOOPING SESUAI WARNA YANG DI PASSING */
	 	
	let color = ``;

	for (let j = 0; j < car.color.length; j++) {
		color += `
			<span class="color-picker is-` + car.color[j] + `"></span>
		`;
	}

	let html = `
		<div class="card is-3">
			<div class="card-header">
				<img src="./assets/` + car.image + `" alt="">
				<div class="overlay"></div>
			</div>

			<div class="card-body">
				<div class="card-row">
					<div class="cr-icon">
						<img src="./assets/noun_57351_cc.png">
					</div>
					<div>
						` + car.transmision + `
					</div>
				</div>
				<div class="card-row">
					<div class="cr-icon">
						<img src="./assets/iconmonstr-paint-bucket-10-240.png">
					</div>
					<div class="colors">
						` + color + `
					</div>
				</div>
				<div class="card-row">
					<div class="cr-icon">
						<img src="./assets/90237_227663_dollar_currency.png">
					</div>
					<div>
						` + car.price + `
					</div>
				</div>
			</div>
		</div>
	`;

	return html;
};

$(function() {

	let html = "";

	for (let i = 0; i < 3; i++) {
		html += renderHTML(cars[i]);
	}

	$('.special-offers .cards').append(html);

});
