import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import {Employee} from './class/employee';

@Component({
    selector: 'dashboard',
     templateUrl: './dashboard.component.html'
    // template: `<h3>My Dashboard</h3>
    // `
})

export class DashboardComponent implements OnInit {
    
    employes: Employee[] = [];
        
    constructor (private employeeService: EmployeeService){}
    
    ngOnInit(): void {
            this.employeeService.getEmployees().then(
                employes => this.employes = employes.slice(1,5)
            );

        }
}