import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {
    private movieName: any;

  constructor(public http: HttpClient) {
    this.movieName = 'Texto uno.';
    console.log('Hello MoviesProvider Provider');

  }

    public test(): any {
        return 'Texto de prueba';
    }

    public setMovieName(name: string): void {
        this.movieName = name;
    }

    public getMovieName(): string {
        return this.movieName;
    }

    public searchMoview(name: string): Promise<any> {
        let url = 'http://www.omdbapi.com/?apikey=cf36c0f0&s=' + name;
        return this.http.get(url).toPromise();
    }


}
