import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { SidebarplaceholderComponent } from './sidebarplaceholder/sidebarplaceholder.component';
import { ListcasesComponent } from './listcases/listcases.component';
import { ViewerComponent } from './viewer/viewer.component';
import { HotspotService } from './hotspot.service';


@NgModule({
  declarations: [
    AppComponent,
    SidebarplaceholderComponent,
    ListcasesComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [
      HotspotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
