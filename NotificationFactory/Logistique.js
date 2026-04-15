export default class Logistique {
    constructor() {
        this.type = "logistique";
    }

    send(message) {
        console.log(`Envoie : ${message} à la ${this.type}`);
    }
}