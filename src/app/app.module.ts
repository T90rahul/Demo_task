import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { MaterialModule } from './material.module';
import { DetailListComponent } from './detail-list/detail-list.component';
import { DetailsService } from './Services/details.service';
import { HttpClientModule } from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    DetailListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MaterialModule,
    // NgbModule.forRoot()
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
