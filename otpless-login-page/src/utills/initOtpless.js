export const initOTPless = (callback: Function) => {

    const otplessInit = Reflect.get(window, 'otplessInit');

    const loadScript = () =>{
        const script = document.createElement("script")
        script.src = "https://otpless.com/auth.js";
        script.id = "otplessIdScript";
        document.body.appendChild(script)
    }

    otplessInit ? otplessInit() : loadScript();

    Reflect.set(window, "otpless", callback);
}
