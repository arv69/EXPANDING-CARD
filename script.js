const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
	removeActiveClasses();
	panel.addEventListener("click", () => {
		panel.classList.toggle("active");
	});
});

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove("active");
	});
}
