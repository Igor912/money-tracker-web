import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { CostsComponent } from './components/cost/costs.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { CostService } from './components/cost/cost.service';

@NgModule({
  declarations: [
    AppComponent,
    CostsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
