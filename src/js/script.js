'use strict';

const header = document.querySelector('#header');
const scrollable = document.documentElement;

const toggleMenu = () => {
	header.classList.toggle('header_active');
};

const colorizeMenu = () => {
	console.log('test');
};

document.querySelector('#burger').addEventListener('click', toggleMenu);

window.addEventListener('scroll', () => {
	if (scrollable.scrollTop > document.documentElement.clientHeight) {
		header.classList.add('header_colorize');
	} else {
		header.classList.remove('header_colorize');
	}
});
