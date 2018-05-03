import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListcasesComponent } from './listcases/listcases.component';
import { SidebarplaceholderComponent } from './sidebarplaceholder/sidebarplaceholder.component';
import { HotspotsidebarComponent } from './hotspotsidebar/hotspotsidebar.component';
import { ViewerComponent } from './viewer/viewer.component';
import { NewcaseComponent } from './newcase/newcase.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  {   
    path: 'list',
    children: [
      { path: '', component: ListcasesComponent },
      { path: '', component: SidebarplaceholderComponent, outlet: 'sidebar' },
    ]
  },
  {   
    path: 'newcase',
    children: [
      { path: '', component: NewcaseComponent },
      { path: '', component: SidebarplaceholderComponent, outlet: 'sidebar' },
    ]
  },  
  {
    path: 'case/:id',
    children: [
      { path: '', component: ViewerComponent },
      { path: '', component: HotspotsidebarComponent, outlet: 'hotspotsidebar' },
    ]
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ 
    RouterModule 
  ]
})
export class RoutingModule { }
