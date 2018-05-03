import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { SidebarplaceholderComponent } from './sidebarplaceholder/sidebarplaceholder.component';
import { ListcasesComponent } from './listcases/listcases.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarplaceholderComponent,
    ListcasesComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
