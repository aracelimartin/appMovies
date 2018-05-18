import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';

import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the ListMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'list-movies'
})
@Component({
  selector: 'page-list-movies',
  templateUrl: 'list-movies.html',
})
export class ListMoviesPage {

    public listMovies;
    public arrayMovies: any[];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public moviesProvider: MoviesProvider,
      private modalCtrl: ModalController,
  ) {
      console.log('Constructor');
      this.arrayMovies = [];
  }

    ionViewDidLoad() {
        this.listMovies = this.navParams.get('moviesList');

        if (!this.listMovies) {
            this.listMovies = {
                "Search": [
                    {
                        "Title": "James Bond 007: Everything or Nothing",
                        "Year": "2003",
                        "imdbID": "tt0366629",
                        "Type": "game",
                        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDYwMDU1Nl5BMl5BanBnXkFtZTgwNTM2NTQ3MDE@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Bond of Love",
                        "Year": "2001",
                        "imdbID": "tt0284083",
                        "Type": "movie",
                        "Poster": "https://ia.media-imdb.com/images/M/MV5BMTY1NDk5MjYxM15BMl5BanBnXkFtZTcwMzAzNzUxMQ@@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Becoming Bond",
                        "Year": "2017",
                        "imdbID": "tt6110504",
                        "Type": "movie",
                        "Poster": "https://ia.media-imdb.com/images/M/MV5BZDRiNGIzYWEtYzY3Zi00MTcwLWFkOWItZjEyYjg0OGMxMGQ5XkEyXkFqcGdeQXVyMjM4NjQxMDA@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Bond of Silence",
                        "Year": "2010",
                        "imdbID": "tt1659192",
                        "Type": "movie",
                        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4NTI2MjY0M15BMl5BanBnXkFtZTcwNTkwMDMzNQ@@._V1_SX300.jpg"
                    },
                    {
                        "Title": "The Bond",
                        "Year": "1918",
                        "imdbID": "tt0008907",
                        "Type": "movie",
                        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZmE3MzIxMDMtNzJiOC00YzY5LTg5ZWUtNTZiZDM1Y2ZmNDYyXkEyXkFqcGdeQXVyNDUzNzExOTE@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Mad Mission 3: Our Man from Bond Street",
                        "Year": "1984",
                        "imdbID": "tt0088457",
                        "Type": "movie",
                        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxMjI2NzMzM15BMl5BanBnXkFtZTcwODgxOTUxMQ@@._V1_SX300.jpg"
                    },
                    {
                        "Title": "James Bond 007: Goldfinger",
                        "Year": "1986",
                        "imdbID": "tt0924449",
                        "Type": "game",
                        "Poster": "http://ia.media-imdb.com/images/M/MV5BZTM4N2I0NWYtNWUyYS00NjkzLWIwNWMtOGU1MWZmYWM5MzRkXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Mr. Bond",
                        "Year": "1992",
                        "imdbID": "tt0104927",
                        "Type": "movie",
                        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BZTYzZjI1MWEtMDgxYi00ZGNmLThkOWEtNmJlOWFiZjNmNjE0XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX300.jpg"
                    },
                    {
                        "Title": "Bond Girls Are Forever",
                        "Year": "2002",
                        "imdbID": "tt0353252",
                        "Type": "movie",
                        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNTMzNjM5OF5BMl5BanBnXkFtZTgwOTY4OTk1MDE@._V1_SX300.jpg"
                    }
                ],
                "totalResults": "285",
                "Response": "True"
            }

        }

        this.arrayMovies = this.listMovies.Search;
    }

    public goMovieDetail(movie: any): void {
        let modal = this.modalCtrl.create('detail-movie', { movie });
        modal.present();
        modal.onDidDismiss((data) => {

        });
    }

    public openImdb(movie): void {
        let url = 'https://imdb.com/title/' + movie.imdbID;
        window.open(url, '_system');
    }

    public shareMovie(movie): void {
        console.log('shareMovie', movie);
    }

}

