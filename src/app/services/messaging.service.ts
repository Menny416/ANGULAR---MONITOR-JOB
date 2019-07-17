import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo, mergeMap  } from 'rxjs/operators';


@Injectable()
export class MessagingService {

  constructor(private afMessaging: AngularFireMessaging) {
  }

  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => { 
                     this.listen();
       },
        (error) => { console.error(error); }
      );
  }

  deleteToken() {
    this.afMessaging.getToken
      .pipe(mergeMap(token => this.afMessaging.deleteToken(token)))
      .subscribe(
        (token) => { console.log('Deleted!'); },
      );
  }
  listen() {
    this.afMessaging.messages
      .subscribe((message) => {  });
  }
}
