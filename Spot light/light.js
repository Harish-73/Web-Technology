let main = document.querySelector('.container');
let mouse = document.querySelector('.mouse');
		
main.addEventListener('mousemove',
	(e) => {
			mouse.style.clipPath =
	`circle(10% at ${e.offsetX}px ${e.offsetY}px)`;
			});