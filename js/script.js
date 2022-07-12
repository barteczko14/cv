document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');
	
	function addShadow() {
		if (window.scrollY >= 300 || window.innerWidth <500) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}
	// console.log(window.innerWidth);


	allNavItems.forEach((item) =>
		item.addEventListener('click', () => navList.classList.remove('show'))
	);
	window.addEventListener('scroll', addShadow);
});
