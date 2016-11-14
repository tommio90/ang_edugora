import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { routing } from './routing/app.routing';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent }  from './app.component';
import {WordsComponent} from './components/words/words.component';
import {ProfileComponent} from './components/profile/profile.component';
import {NavbarComponent} from './components/navbar/navbar.component';


@NgModule({
  imports: [ 
            BrowserModule, 
            FormsModule, 
            HttpModule ,
            routing
          ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  declarations: [ AppComponent, WordsComponent, ProfileComponent, NavbarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

