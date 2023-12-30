class Observer {
  private observers: any[] = [];

  subscribe(fn: any) {
    this.observers.push(fn)
  }

  unsubscribe(subscriberDelete: any) {
    this.observers=this.observers.filter((subscriber)=>subscriber!==subscriberDelete)
  }

  notify(param:string) {
    this.observers.forEach((observer) => observer(param))
  }
  
}

const observable = new Observer();

export {observable}