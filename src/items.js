import './lists.scss';

import createSvgCheckSquare from './svg/check-square.svg?create';
import createSvgChevronLeft from './svg/chevron-left.svg?create';
import createSvgPencil from './svg/pencil.svg?create';
import createSvgPlusLg from './svg/plus-lg.svg?create';
import createSvgSquare from './svg/square.svg?create';

import { createElement as el } from 'create-html/dist/browser/es6-module/create-html';

import footer from './footer';

function empty(element) {
	while(element.firstChild) {
		element.removeChild(element.firstChild);
	}
	return element;
}

export default function ({ model: { list = 'List', categories = [] } = {} } = {}) {
	return el('div', { class: 'lists' }, [
		el('header', null, [
			el('h1', null, `${list} Items`),
			' ',
			el('a', { href: '#lists' }, createSvgChevronLeft()),
			' ',
			el('a', { href: `#lists/${list}/items?add=true` }, createSvgPlusLg())
		]),

		el('main', null, categories.length == 0
			? el('p', null, 'Items not found.')
			: categories.map(({ name, items = [] }) => [
				el('h2', null, name),
				items.length == 0
					? el('p', null, 'Items not found.')
					: el('ul', { class: 'list-group' }, items.map(({ checked = false, name }) => {
						return el('li', null, [
							el('span', null, name),
							' ',
							el(
								'button',
								{ type: 'button' },
								checked ? createSvgCheckSquare() : createSvgSquare(),
								(button) => void button.addEventListener('click', () => {
									checked = !checked;
									empty(button).append(checked ? createSvgCheckSquare() : createSvgSquare());
								})
							),
							' ',
							el('a', { href: `#lists/${list}/items/${name}?edit=true` }, createSvgPencil())
						]);
					}))
			])
		),

		footer()
	]);
}
