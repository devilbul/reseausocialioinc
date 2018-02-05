import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {Article} from "../../app/article";
import {JsonDataProvider} from "../../providers/json-data/json-data";

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html'
})
export class CommentPage {
  article: Article;
  lengthFeed: number;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public jsonDataProvider: JsonDataProvider) {
    this.article = new Article(0, "https://ionicframework.com/img/docs/mcfly.jpg", "Marc", "Mollinari",
      "23/01/2018 9h30", "", "", "", 0);
    this.init();
  }

  ionViewDidEnter() {
    this.init();
  }

  init(){
    this.jsonDataProvider.getLocalData().subscribe(
      val => {
        this.lengthFeed = val.feed.length;
      }, error => {
        console.log("oh, ", error)
      },
      () => console.log("id incremented")
    );
  }

  addArticle(form) {
    if (form.value.description.length > 0 && form.value.title.length > 0) {
      this.article = new Article(this.lengthFeed, "https://ionicframework.com/img/docs/mcfly.jpg", "Marc", "Mollinari",
        "23/01/2018 9h30", form.value.title, form.value.description, form.value.img != null ? form.value.img : "", 0);
      this.jsonDataProvider.addArticle(this.article);
      console.log('article  added');
      this.navCtrl.parent.select(0);
      form.resetForm();
    }
    else {
      if (form.value.description.length == 0 && form.value.title.length > 0) {
        let alert = this.alertCtrl.create({
          title: 'Erreur',
          subTitle: 'champ description vide',
          buttons: ['OK']
        });
        alert.present();
      }

      if (form.value.description.length > 0 && form.value.title.length == 0) {
        let alert = this.alertCtrl.create({
          title: 'Erreur',
          subTitle: 'champ titre vide',
          buttons: ['OK']
        });
        alert.present();
      }

      if (form.value.description.length == 0 && form.value.title.length == 0) {
        let alert = this.alertCtrl.create({
          title: 'Erreur',
          subTitle: 'champ titre et description vide',
          buttons: ['OK']
        });
        alert.present();
      }
    }
  }
}
