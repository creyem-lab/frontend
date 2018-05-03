import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { INITIAL_STATE } from '../state'
import { STORES } from '../store'
import { SERVICES } from './../service'
import { initialize } from 'statex'
import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { SidebarplaceholderComponent } from './sidebarplaceholder/sidebarplaceholder.component';
import { ListcasesComponent } from './listcases/listcases.component';
import { ViewerComponent } from './viewer/viewer.component';

import { HttpClientModule } from '@angular/common/http';

initialize(INITIAL_STATE, {
  hotLoad: !environment.production,
  domain: 'creyemlab'
})

@NgModule({
  declarations: [
    AppComponent,
    SidebarplaceholderComponent,
    ListcasesComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [STORES, SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
