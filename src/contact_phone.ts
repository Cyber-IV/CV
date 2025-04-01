import { deviceType } from "../dist/utils.js";

if (deviceType === "desktop") {
    const contactPhoneElement = document.getElementById("contact_phone");
    if (contactPhoneElement) {
        contactPhoneElement.removeAttribute("href");
    }
}