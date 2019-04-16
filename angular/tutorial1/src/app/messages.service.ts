import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  add(message: string) {
    console.log("added message");
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }

}
