import Sms from "./Sms.js";
import Logistique from "./Logistique.js";
import Email from "./Email.js";
import SupportEmail from "./SupportEmail.js";

export default class NotificationFactory {
    constructor(type) {
        switch (type) {
            case "sms":
                return new Sms();
            case "logistique":
                return new Logistique();
            case "email":
                return new Email();
            case "support email":
                return new SupportEmail();
            default:
                throw new Error("Notification invalide");
        }
    }
} 