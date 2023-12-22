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
        alert("OTPLESS DATA :"+JSON.stringify(otplessUser))
        window.location.href = '/dashboard';
    };

    window.OTPlessSDKCancelCallback = () =>{
        const floater = document.getElementById('otpless-floating-button')
        floater.style.display  = 'none'
    }
}