export class PublisherSubscriber {
  constructor() {
    this.subscribes = {};
    this.api = {
      subscribe: this.subscribe.bind(this),
      unsubscribe: this.unsubscribe.bind(this),
      publish: this.publish.bind(this),
    }
  }

  checkEvent(event) {
    if (!this.subscribes.hasOwnProperty(event)) {
      this.subscribes[event] = [];
    }
  }

  subscribe(event, func) {
    this.checkEvent(event);
    this.subscribes[event].push(func);
  }

  unsubscribe(event, func) {
    this.checkEvent(event);
    this.subscribes[event] = this.subscribes[event].filter(f => f != func);
  }

  publish(event, data) {
    this.checkEvent(event);
    this.subscribes[event].forEach(f => f(data));
  }
}