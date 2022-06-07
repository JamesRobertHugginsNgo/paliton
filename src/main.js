export default function() {
	const main = document.createElement('main');

	const p = document.createElement('p');
	p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nibh lectus. Quisque id molestie est, vel porta tortor. Integer convallis dictum gravida. Suspendisse potenti. Fusce velit turpis, egestas vitae augue et, dignissim volutpat metus. Curabitur nec arcu tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
	main.append(p);

	return main;
}
