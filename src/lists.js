import './lists.scss';

import createSvg123 from './svg/123.svg?create';
import createSvgPencil from './svg/pencil.svg?create';
import createSvgPlusLg from './svg/plus-lg.svg?create';
import createSvgViewList from './svg/view-list.svg?create';

import { createElement as el } from 'create-html/dist/browser/es6-module/create-html';

import footer from './footer';

export default function ({ model: { lists = [] } = {} } = {}) {
	return el('div', { class: 'lists' }, [
		el('header', null, [
			el('h1', null, 'Lists'),
			' ',
			el('span', null, createSvg123()),
			' ',
			el('a', { href: '#lists?add=true' }, createSvgPlusLg())
		]),

		el('main', null, lists.length == 0
			? el('p', null, 'Lists not found.')
			: el('ul', { class: 'list-group' }, lists.map((list) =>
				el('li', null, [
					el('span', null, list),
					' ',
					el('a', { href: `#lists/${list}/items` }, createSvgViewList()),
					' ',
					el('a', { href: `#lists/${list}?edit=true` }, createSvgPencil())
				])
			))
		),

		footer()
	]);
}
