import './index.scss';

import router from 'router/dist/browser/es6-module/router.debug';

import lists from './lists';
import items from './items';

let view = { remove() { } };

router.route = ({ hash, paths, query }) => { // eslint-disable-line no-unused-vars
	switch (true) {
		case paths.length === 1 && paths[0] === 'lists' && !query: {
			const model = {
				lists: ['List 1', 'List 2', 'List 3']
			};

			view.remove();
			view = lists({ model });
			document.body.append(view);

			break;
		}

		case paths.length === 3 && paths[0] === 'lists' && paths[2] === 'items' && !query: {
			const model = {
				list: paths[1],
				categories: [
					{
						name: 'Cateogory 1',
						items: [
							{
								id: '000',
								quantity: '0',
								name: 'Item 1',
								notes: 'Additional Information',
								checked: false
							},
							{
								id: '001',
								quantity: '0',
								name: 'Item 2',
								notes: 'Additional Information',
								checked: true
							}
						]
					}
				]
			};

			view.remove();
			view = items({ model });
			document.body.append(view);

			break;
		}

		default: {
			router.replace('lists');
		}
	}
};

router.start();
