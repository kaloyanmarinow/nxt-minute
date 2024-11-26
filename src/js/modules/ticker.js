const tickers = document.querySelectorAll('.js-ticker');

function createTicker(ticker) {
	const tickerContainer = ticker.querySelector('.ticker__container');
	const tickerItems = ticker.querySelector('.ticker__inner');
	let partnersWidth = tickerItems.offsetWidth;

	tickerContainer.append(tickerItems.cloneNode(true));
	tickerContainer.prepend(tickerItems.cloneNode(true));
	tickerContainer.prepend(tickerItems.cloneNode(true));
	tickerContainer.append(tickerItems.cloneNode(true));
	tickerContainer.append(tickerItems.cloneNode(true));
	tickerContainer.append(tickerItems.cloneNode(true));

	tickerContainer.style.setProperty('--item-width', `${-partnersWidth}px`);
	ticker.classList.add('is-animated');
}

if (tickers.length > 0) {
	window.addEventListener('load', () => {
		tickers.forEach((ticker) => {
			createTicker(ticker);
		});
	});
}
