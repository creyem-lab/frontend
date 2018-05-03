import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListcasesComponent } from './listcases/listcases.component';
import { SidebarplaceholderComponent } from './sidebarplaceholder/sidebarplaceholder.component';
import { ViewerComponent } from './viewer/viewer.component';

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
    path: 'case/:id',
    children: [
      { path: '', component: ViewerComponent },
      { path: '', component: SidebarplaceholderComponent, outlet: 'sidebar' },
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
