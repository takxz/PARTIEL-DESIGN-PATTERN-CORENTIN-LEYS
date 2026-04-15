export default class Email {
    constructor() {
        this.type = "email";
    }

    send(message) {
        console.log(`Envoie : ${message} par :  ${this.type}`);
    }
}  

