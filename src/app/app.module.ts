import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from "@angular/common/http";
import { FlagsComponent } from './components/flags/flags.component';
import { ResqestComponent } from './components/resqest/resqest.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlagsComponent,
    ResqestComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
