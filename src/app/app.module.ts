import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CribsService } from './services/cribs.service';
import { UtilService } from './services/util.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CribCardComponent,
    CribListingComponent,
    AddListingFormComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [CribsService,UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
