import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { EmployeeList }  from './employeeList.component'
import { EmployeeDetailComponent } from './employee-detail.component';
import {EmployeeService } from './services/employee.service';

import { DashboardComponent } from './dashboard.component';
import {AppRoutingModule} from './app-routing.module';
@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule
                  //,
                  // RouterModule.forRoot([{
                  //                       path: 'employee',
                  //                       component: EmployeeList
                  //                     },
                  //                     {
                  //                       path: 'dashboard',
                  //                       component: DashboardComponent
                  //                     },
                  //                     {
                  //                       path: '',
                  //                       redirectTo: 'dashboard',
                  //                       pathMatch: 'full'
                  //                     },
                  //                     {
                  //                       path: 'employee/detail/:id',
                  //                       component: EmployeeDetailComponent
                  //                     }
                  //                   ])
                ],
  declarations: [ AppComponent, 
                  EmployeeDetailComponent,
                  EmployeeList,
                  DashboardComponent ],
  providers: [EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
 }


