import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {FirebaseDataProvider} from "../../providers/firebase-data/firebase-data";
import {DetailEventPage} from "../detailevent/detailevent";
import { Event } from "../../app/event";


@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  eventList: Event[];
  icon: any;

  constructor(public navCtrl: NavController, private firebaseDataProvider: FirebaseDataProvider) {
    this.getEvents();
  }

  ionViewDidEnter() {
    this.getEvents();
  }

  private getEvents() {
    this.firebaseDataProvider.getFirebaseData().subscribe(
      val => {
        this.eventList = val;
      }, error => {
        console.log('oh : ', error);
      },
      () => console.log('get events completed')
    );
  }

  openDetail(event: Event) {
    this.navCtrl.push(DetailEventPage, {event: event});
  }

  initIcon(type: any){
    if (type  == "foot"){
      this.icon = "ios-football";
    }
    if (type  == "rugby"){
      this.icon = "ios-american-football";
    }
    if (type  == "hand"){
      this.icon = "md-basketball";
    }
    return this.icon;
  }

}
