export const initOTPless = () => {
	const otplessInit = Reflect.get(window, "otplessInit");

	const loadScript = () => {
		const script = document.createElement("script");
		script.src = "https://otpless.com/auth.js";
		script.id = "otplessIdScript";
		document.body.appendChild(script);

		setTimeout(() => {
			const OTPlessButton = document.getElementById("otpless");
			if (OTPlessButton) OTPlessButton.click();
		}, 0);
	};

	otplessInit ? otplessInit() : loadScript();

    	const otpless = (otplessUser) => {
		alert("OTPLESS DATA :" + JSON.stringify(otplessUser));
		window.location.href = "/dashboard";
	};

    	Reflect.set(window, 'otpless', otpless);
};
