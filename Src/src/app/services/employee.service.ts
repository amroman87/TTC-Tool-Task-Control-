import { Injectable } from '@angular/core';
import { Employee } from '../class/employee';
import { EMPLOYEES } from '../mocks/mock-employee';


@Injectable()
export class EmployeeService {

    getEmployees(): Promise<Employee[]>{
        return Promise.resolve(EMPLOYEES);
    }
    getEmployeesSlowly(): Promise<Employee[]>{
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getEmployees()), 2000);
        })
    }
    getEmployee(id: number): Promise<Employee>{
        return Promise.resolve(EMPLOYEES.find(employee => employee.id === id));
        // return this.getEmployee().then(employee =>
        // EMPLOYEES.find(employee=> employee.id === id));
    }
}