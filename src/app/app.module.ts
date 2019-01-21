import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    CribCardComponent,
    CribListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
