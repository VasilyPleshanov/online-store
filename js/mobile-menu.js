menu();

function menu() {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.mobile-menu');
	const menuBody = document.querySelector('.mobile-menu__body');
  const linkMan = document.querySelector('#man');
  const linkWoman = document.querySelector('#woman');
  const submenu = document.querySelector('.header__mobile-submenu');
  const submenuBody = document.querySelector('.mobile-menu__body_submenu');

	burger.addEventListener('click', () => {
		openCloseMenu();
	});

	menuBody.addEventListener('click', () => {
		openCloseMenu();
	});

  linkMan.addEventListener('click', () => {
		openCloseSubmenu();
	});

  linkWoman.addEventListener('click', () => {
		openCloseSubmenu();
	});

  submenuBody.addEventListener('click', () => {
		openCloseSubmenu();
	});

  function openCloseMenu() {
    menu.classList.toggle('_active');
    lockBody();
  }

  function openCloseSubmenu() {
    submenu.classList.toggle('_active');
    lockBody();
  }

  function lockBody() {
    document.body.classList.toggle('_lock');
  }
}