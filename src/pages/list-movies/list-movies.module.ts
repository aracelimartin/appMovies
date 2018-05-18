import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMoviesPage } from './list-movies';

@NgModule({
  declarations: [
    ListMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMoviesPage),
  ],
})
export class ListMoviesPageModule {}
