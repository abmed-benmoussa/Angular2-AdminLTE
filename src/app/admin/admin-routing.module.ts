import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { MaterielsComponent } from './materiels/materiels.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'admin', 
        component: AdminComponent,
        children: [
            {
                path:'',
                component: Dashboard1Component
            },
            {
                path:'dashboard1',
                component: Dashboard1Component
            },
            {
                path:'materiels',
                component: MaterielsComponent
            }
        ]
     }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
