import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class FirebaseDataProvider {

  constructor(public http: HttpClient, private db: AngularFireDatabase) {
    console.log('Hello FirebaseDataProvider Provider');
  }

  public getFirebaseData(): Observable<any> {
    return this.db.list('/events');
  }

}
