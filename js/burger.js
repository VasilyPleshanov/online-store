burger();

function burger() {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.mobile-menu');

	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
	});
}