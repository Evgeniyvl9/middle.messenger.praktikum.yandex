// export default class EventBus {
//     constructor() {
//         this.listeners = {};
//     }

//     on(event, callback) {
//         if (!this.listeners[event]) {
//             this.listeners[event] = [];
//         }

//         this.listeners[event].push(callback);
//   }

//     off(event, callback) {
//         if (!this.listeners[event]) {
//       throw new Error(`Нет события: ${event}`);
//     }

//     this.listeners[event] = this.listeners[event].filter(
//       listener => listener !== callback
//     );
//   }

//     emit(event, ...args) {
//         if (!this.listeners[event]) {
//                 throw new Error(`Нет события: ${event}`);
//         }

//         this.listeners[event].forEach(listener => {
//             listener(...args);
//         });
//     }
// } 


export default class EventBus<E extends string> {
  private listeners: Record<string, Function[]>;
  constructor() {
    this.listeners = {};
  }
  on(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }
  off(event: string, callback: Function) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  }
  emit<T extends unknown[] = []>(event: E, ...args: T) {
    if (!this.listeners[event]) {
      return;
      // throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event].forEach(function (listener) {
      listener(...args);
    });
  }
}
