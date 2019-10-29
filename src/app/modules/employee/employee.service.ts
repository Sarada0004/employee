import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public empData;
  private employeesData = new BehaviorSubject(this.getEmployeesData());
  currentEmployeesData = this.employeesData.asObservable();

  getEmployeesData(){
    let employees = [
      {
        id : 14242, name : "sarada"
      },
      {
        id : 14243, name : "dhana",
      },
      {
        id : 14244, name : "devi"
      },
      {
        id : 14245, name : "lakshmi",
      }
    ];
    return employees;
  }
  
  setEmpData(data){
    this.empData = data;
  };

  getEmpData(){
    return this.empData;
  }

  changeEmployeeData(data){
    this.employeesData.next(data);
  }


}
