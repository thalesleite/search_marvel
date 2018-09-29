import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvelComponent } from './marvel/marvel.component';
import { MarvelCharactersComponent } from './marvel-characters/marvel-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    MarvelCharactersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
