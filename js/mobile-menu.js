menu();

function menu() {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.mobile-menu');
	const menuBody = document.querySelector('.mobile-menu__body');

	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
	});

	menuBody.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
	});
}