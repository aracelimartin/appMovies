import { Component } from '@angular/core';
import { NavController, LoadingController, IonicPage, ToastController, Loading } from 'ionic-angular';
// import { MoviesProvider } from '../../providers/movies/movies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private instanciaLoading: Loading;
  private storage: Storage;

  constructor(
    public navCtrl: NavController,
    // public moviesProvider: MoviesProvider,
    private loadingCtrl: LoadingController,
    // private toastCtrl: ToastController,

  ) {
    this.storage = (window as any).localStorage;
  }

  public login(): void {
    this.showLoading('Signing in');
    setTimeout(() => {
      this.storage.setItem('session', '{auth_token: jashdkjhasdjkhaskjd}');
      this.hideLoading();
      this.navCtrl.setRoot('list-movies');
    }, 850);
  }

  private showLoading(message?): void {
    this.instanciaLoading = this.loadingCtrl.create({
      content: message,
    });
    this.instanciaLoading.present();
  }

  private hideLoading(): void {
    if (this.instanciaLoading) {
      this.instanciaLoading.dismiss();
      this.instanciaLoading = null;
    }
  }


}
