import {Component, Input, OnInit} from '@angular/core';
import { Employee } from  "./class/employee"
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location } from '@angular/common';
import {EmployeeService} from './services/employee.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html'
    
})
export class EmployeeDetailComponent implements OnInit{

     @Input() employee: Employee;

    ngOnInit(): void {

       this.route.paramMap.switchMap((params: ParamMap)=>
       this.employeeService.getEmployee(+params.get('id'))
    ).subscribe(employee => this.employee = employee)
    }

   

    constructor (
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location){}

    goBack(): void {
        this.location.back();
    }

}