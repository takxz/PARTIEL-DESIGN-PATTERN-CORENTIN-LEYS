export default class NotificationEvent  {
    constructor(){
        this.callbackList = [];
    }

    eventEmit(event, payload){
        for (let item of this.callbackList.filter((e) => e.event === event)) {
            item.callback(payload);
        }
    }

    addEvent(event, callback){
        this.callbackList.push({event, callback})
    }
}