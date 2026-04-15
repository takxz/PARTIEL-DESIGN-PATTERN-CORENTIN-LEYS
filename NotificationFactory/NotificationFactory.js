import Sms from "./Sms.js";
import Logistique from "./Logistique.js";
import Email from "./Email.js";

export default class NotificationAFactory {
    constructor(type) {
        switch (type) {
            case "sms":
                return new Sms();
            case "logistique":
                return new Logistique();
            case "email":
                return new Email();
            default:
                throw new Error("Notification invalide");
        }
    }
} 