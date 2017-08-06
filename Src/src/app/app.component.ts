import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from  "./class/employee"

const EMPLOYEES: Employee[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
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
export class AppComponent  { 
  title = 'TTC (Task Tool Control)';  
  selectedEmployee: Employee;
  employees = EMPLOYEES;

   onSelect(employee: Employee): void{
   this.selectedEmployee = employee;
  }
 }






 
