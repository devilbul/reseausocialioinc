import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Storage} from "@ionic/storage";
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';
import {tap} from "rxjs/operators";
import {of} from "rxjs/observable/of";

@Injectable()
export class JsonDataProvider {
  feed: any[];

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello JsonDataProvider Provider');
    this.feed = [];
  }

  public getLocalData(): Observable<any> {
    if (this.feed.length == 0) {
      return Observable.fromPromise(this.storage.get('feedData')).mergeMap((val:any) => {
        if (val == null || val.feed == null){
          return this.http.get('assets/data/data.json').pipe(
            tap(res => {
              this.feed = res.feed;
            })
          );
        }
        else {
          this.feed = val.feed;
          return of({feed: this.feed});
        }
      });
    }
    else {
      return of({feed: this.feed});
    }
  }

  public addArticle(article: any) {
    this.feed.push(article);
    this.storage.set('feedData', {'feed': this.feed});
    // this.storage.set('feedData', null);
  }
}
