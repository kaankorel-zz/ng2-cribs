import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CribsService } from './services/cribs.service';

@NgModule({
  declarations: [
    AppComponent,
    CribCardComponent,
    CribListingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [CribsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
