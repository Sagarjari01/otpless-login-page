export const initOTPless = () => {

    const otplessInit = Reflect.get(window, 'otplessInit');

    const loadScript = () =>{
        const script = document.createElement("script")
        script.src = "https://otpless.com/auth.js";
        script.id = "otplessIdScript";
        document.body.appendChild(script)
    }

    if (otplessInit) {
        otplessInit()
    }
    else {
        loadScript()
    }

    window.otpless = (otplessUser) => {
        const currentURL = window.location.href;
        const urlWithoutParams = currentURL.split("?")[0];
        window.history.pushState(null, "", urlWithoutParams);
        alert("OTPLESS DATA :"+JSON.stringify(otplessUser))
        window.location.href = '/dashboard';
    };
}