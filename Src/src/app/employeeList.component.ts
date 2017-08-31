import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from  "./class/employee"
import { EmployeeService } from "./services/employee.service";
import { OnInit } from '@angular/core';

@Component({  
  selector: 'employeeList',
  template: `  
  <employee-detail [employee]="selectedEmployee"></employee-detail>
  <h2>My Employees</h2>
  <ul class="employee">
    <li [class.selected]="employee === selectedEmployee" *ngFor="let employee of employees" (click)= "onSelect(employee)">
      <span class="badge">{{employee.id}}</span>
      {{employee.name}}
    </li>
  </ul>
  `,

  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .employee {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .employee li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .employee li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .employee li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .employee .text {
    position: relative;
    top: -3px;
  }
  .employee .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
})
export class EmployeeList  implements OnInit{ 
  
  constructor(private employeeService: EmployeeService)
  {
    
  }
  

  
  selectedEmployee: Employee;
  employees: Employee[];

  
  
   onSelect(employee: Employee): void{
   this.selectedEmployee = employee;
  }
  getEmployees(): void {
    this.employeeService.getEmployees().then(emp =>
     this.employees = emp);    
      // this.employeeService.getEmployeesSlowly().then(emp =>
      // this.employees = emp); 
  }
  ngOnInit(): void {
    this.getEmployees();
  }
 }






 
