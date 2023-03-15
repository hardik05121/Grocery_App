import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoreModule } from './core/core.module';
import { FrontModule } from './front/front.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FrontModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
