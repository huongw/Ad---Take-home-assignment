window.addEventListener("load", () => {
	const banner = document.querySelector(".banner--wrapper");
	const modal = document.querySelector(".modal");
	const mobileView = document.querySelector(".mobile-view");
	const desktopView = document.querySelector(".desktop-view");

	// Show and Hide Modal ----------------------------------
	const showModal = function () {
		modal.classList.remove("hide");
	};

	const hideModal = function () {
		modal.classList.add("hide");
	};

	const showModalOnCount = function () {
		const counter = document.getElementById("counter");
		let num = 3;

		const interval = setInterval(() => {
			if (num > 0) {
				counter.classList.remove("hide");
				counter.innerText = num;
			}

			if (num === 0) {
				counter.classList.add("hide");
				showModal();
				clearInterval(interval);
			}

			num -= 1;
		}, 800);

		banner.addEventListener("mouseout", () => {
			clearInterval(interval);
			counter.classList.add("hide");
		});
	};

	banner.addEventListener("mouseover", showModalOnCount);

	banner.addEventListener("mouseup", showModal);

	modal.addEventListener("mouseup", hideModal);

	// Change banner when screen resizes to 600px -----------------
	const windowResizeHandler = function () {
		if (window.innerWidth < 600) {
			mobileView.classList.remove("displayNone");
			desktopView.classList.add("displayNone");
			return;
		}

		mobileView.classList.add("displayNone");
		desktopView.classList.remove("displayNone");
	};

	window.addEventListener("resize", windowResizeHandler);
});
