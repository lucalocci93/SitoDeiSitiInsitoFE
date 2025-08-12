import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from 'src/app/Interface/Notification';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SSEService {

  ApiEndpoint: string = environment.apiEndpoint;

  notification: Notification[] = [];
  constructor() { }

  createEventSource(): Observable<Notification[]> {

      const eventSource = new EventSource(this.ApiEndpoint.concat("GetNotificationSSE"));

      return new Observable(observer => {
          eventSource.onmessage = event => {
            const messageData: Notification[] = JSON.parse(event.data);
            observer.next(messageData);
        };
      });
    }

  addNotification(notification: Notification) {
    this.notification.push(notification);
  }

  clearNotifications() {
    this.notification = [];
  }

  getNotifications(): Notification[] {
    return this.notification;
  }
}
