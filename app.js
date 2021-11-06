window.addEventListener("load", () => {
	const banner = document.querySelector(".banner--wrapper");
	const modal = document.querySelector(".modal");

	const showBanner = function () {
		modal.classList.remove("hide");
	};

	const hideBanner = function () {
		modal.classList.add("hide");
	};

	const showBannerOnCount = function () {
		const counter = document.getElementById("counter");
		let num = 3;

		const interval = setInterval(() => {
			if (num > 0) {
				counter.classList.remove("hide");
				counter.innerText = num;
			}

			if (num === 0) {
				counter.classList.add("hide");
				showBanner();
				clearInterval(interval);
			}

			num -= 1;
		}, 800);

		banner.addEventListener("mouseout", () => {
			clearInterval(interval);
			counter.classList.add("hide");
		});
	};

	banner.addEventListener("mouseover", showBannerOnCount);

	banner.addEventListener("mouseup", showBanner);

	modal.addEventListener("mouseup", hideBanner);
});
