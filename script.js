function CalculateSI(){
	let principal = document.getElementById('p').value;
	let rate = document.getElementById('r').value;
	let time = document.getElementById('t').value;

	let si = principal * rate * time / 100;
	document.getElementById('info').innerHTML = si;
}