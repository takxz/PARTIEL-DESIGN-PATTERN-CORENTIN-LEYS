export default class SupportEmail {
    constructor() {
        this.type = "support email";
    }

    send(message) {
        console.log(`Envoie : ${message} au support`);
    }
}