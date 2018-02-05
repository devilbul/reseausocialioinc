import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JsonDataProvider } from "../../providers/json-data/json-data";
import { Article } from "../../app/article";
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  articles: Article[];
  date: string[];

  constructor(public navCtrl: NavController, public jsonDataProvider: JsonDataProvider) {
    this.getFeed();
  }

  ionViewDidEnter() {
    this.getFeed();
  }

  private getFeed(){
    this.jsonDataProvider.getLocalData().subscribe(
      val => {
        this.articles = val.feed;
      }, error => {
        console.log("oh, ", error)
      },
      () => console.log("get articles completed")
    );
  }

  openDetail(article: Article) {
    this.navCtrl.push(DetailPage, {article: article});
  }

}
