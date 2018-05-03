import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

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

import { HttpModule } from "@angular/http";
import { HotspotsidebarComponent } from './hotspotsidebar/hotspotsidebar.component';
import { NewcaseComponent } from './newcase/newcase.component';
import { NewannotationComponent } from './newannotation/newannotation.component';
import { HotspotDetailComponent } from './hotspot-detail/hotspot-detail.component';

initialize(INITIAL_STATE, {
  hotLoad: !environment.production,
  domain: 'creyemlab'
})

@NgModule({
  declarations: [
    AppComponent,
    SidebarplaceholderComponent,
    ListcasesComponent,
    ViewerComponent,
    HotspotsidebarComponent,
    NewcaseComponent,
    NewannotationComponent,
    HotspotDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [STORES, SERVICES, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
