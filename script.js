const decrementButton = document.querySelector(".decrementButton");
const incrementButton = document.querySelector(".incrementButton");

decrementButton.addEventListener("click", () => {
	const valueText = document.querySelector(".valueText");
	valueText.innerText = Number(valueText.textContent) - 1;
});

incrementButton.addEventListener("click", () => {
	const valueText = document.querySelector(".valueText");
	valueText.innerText = Number(valueText.textContent) + 1;
});
