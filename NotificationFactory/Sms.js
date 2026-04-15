export default class Sms {
    constructor() {
        this.type = "sms";
    }

    send(message) {
        console.log(`Envoie : ${message} par :  ${this.type}`);
    }
}
