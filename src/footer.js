export default function() {
	const footer = document.createElement('footer');

	const hr = document.createElement('hr');

	const p = document.createElement('p');
	p.textContent = 'All rights reserved.';

	footer.append(hr, p);

	return footer;
}
