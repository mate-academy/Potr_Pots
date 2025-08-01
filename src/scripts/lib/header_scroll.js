export function headerScroll() {
	const header = document.querySelector('header.header');
	const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;

	document.addEventListener("scroll", function (e) {
		const scrollTop = window.scrollY;

		if (scrollTop >= startPoint) {
			!header.classList.contains('_header-scroll') ? header.classList.add('_header-scroll') : null;
		} else {
			header.classList.contains('_header-scroll') ? header.classList.remove('_header-scroll') : null;
			header.style.transition = 'background-color 0.3s ease 0s';
		}
	});
}

headerScroll();
