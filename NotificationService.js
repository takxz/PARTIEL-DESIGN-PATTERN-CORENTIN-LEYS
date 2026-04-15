import NotificationFactory from "./NotificationFactory/NotificationFactory.js";

export default class NotificationService{
    constructor(eventList){
        this.eventList = eventList;
        for (let event of this.eventList) {
            event.addEvent("orderCreated", this.orderCreated);
            event.addEvent("payementRefused", this.payementRefused);
            event.addEvent("orderShipped", this.orderShipped);
            event.addEvent("orderOverThresholdAmount", this.orderOverThresholdAmount);
        }
    }

    orderCreated(payload){
        let emailNotification = new NotificationFactory("email");
        emailNotification.send("Votre commande a été créée : " + payload.orderId + " à l'adresse : " + payload.clientEmail);

        if (payload.amount > 1000) {
            let logisticNotification = new NotificationFactory("logistique");
            logisticNotification.send("Commande supérieure à 1000€ : " + payload.orderId + " , il faut faire attention");
        }
    }

    payementRefused(payload){
        let emailNotification = new NotificationFactory("support email");
        emailNotification.send("Le paiement a été refusé : " + payload.orderId + " , envoi d'un email au support");
    }

    orderShipped(payload){
        let emailNotification = new NotificationFactory("sms");
        emailNotification.send("Votre commande a été expédiée : " + payload.orderId + "au téléphone : " + payload.clientTel);
    }
}