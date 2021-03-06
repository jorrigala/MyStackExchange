import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule,
  				  FormsModule,
            HttpModule,
            AppRoutingModule
  				],
  declarations:[AppComponent
                , LoginComponent
  ],
  providers: [
  				
  				{ provide: APP_BASE_HREF, useValue: '/' }
  			],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


