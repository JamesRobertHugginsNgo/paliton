export default function() {
	const header = document.createElement('header');

	const h1 = document.createElement('h1');
	h1.textContent = 'Document Title';
	header.append(h1);

	return header;
}
