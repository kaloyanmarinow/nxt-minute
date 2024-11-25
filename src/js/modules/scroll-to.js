document.querySelectorAll('.js-scroll-to').forEach((link) => {
	link.addEventListener('click', function (event) {
		const targetId = link.getAttribute('href');

		if (!document.querySelector(targetId)) {
			return;
		}

		window.scrollTo({
			top: document.querySelector(targetId).offsetTop - document.querySelector('.header').offsetHeight - 20,
			left: 0,
			behavior: 'smooth',
		});

		event.preventDefault();
	});
});
