import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { Article } from "../../app/article";

@IonicPage({name: "detail-page"})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  article: Article;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.article = this.navParams.get('article');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
