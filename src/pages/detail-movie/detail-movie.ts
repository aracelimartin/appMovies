import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'detail-movie'
})
@Component({
  selector: 'page-detail-movie',
  templateUrl: 'detail-movie.html',
})
export class DetailMoviePage {
    public movieDetail;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.movieDetail = this.navParams.get('movie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailMoviePage');
  }

    public closeModal(): void {
        this.navCtrl.pop();
    }

}
