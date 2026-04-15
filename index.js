import NotificationEvent from "./NotificationEvent.js";
import NotificationService from "./NotificationService.js";

let eventNotification = new NotificationEvent();
let notificationService = new NotificationService([eventNotification]);

// Commande créée de moins de 1000 euros
eventNotification.eventEmit("orderCreated", {
    orderId: "CMD-001",
    clientEmail: "client@shopease.com",
    amount: 120,
});

// Paiement refusé
eventNotification.eventEmit("payementRefused", {
    orderId: "CMD-002",
    clientEmail: "client2@shopease.com"
});

// Commande expédiée
eventNotification.eventEmit("orderShipped", {
    orderId: "CMD-001",
    clientEmail: "test@gmail.com",
    clientTel: "0600000000"
});

// Commande créée de plus de 1000 euros
eventNotification.eventEmit("orderCreated", {
    orderId: "CMD-001",
    clientEmail: "client@shopease.com",
    amount: 3000,
});



