import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from "@ionic-native/calendar";
import { Event } from "../../app/event";

@IonicPage({name: "detail-event-page"})
@Component({
  selector: 'page-detailevent',
  templateUrl: 'detailevent.html',
})
export class DetailEventPage {
  event: Event;
  icon; any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar) {
    this.event = this.navParams.get('event');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetaileventPage');
  }

  addToCalendar() {
    console.log('add in the calendar');

    if (this.calendar.hasReadWritePermission()) {
      console.log('you have the permission');

      this.calendar.createEvent(this.event.title, "", this.event.address);
    }
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
