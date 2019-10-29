import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IemployeeDetail } from '../iemployee-detail';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MatSort,MatPaginator,MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
import { EmployeeDeleteComponent } from '../employee-delete/employee-delete.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  modalRef;
  dataSource;
  Element_data : IemployeeDetail[];
  displayedColumns : string[]= ["id", "name", "action"];

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;


  constructor(private empService : EmployeeService,private modalService : NgbModal, private router : Router, private tsrService : ToastrService) { }

  ngOnInit() {
    this.empService.currentEmployeesData.subscribe(data =>{
      this.Element_data = data;
      this.dataSource = new MatTableDataSource(this.Element_data);
    });
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator
  }

  applyFilter(filterdata : string){
    filterdata = filterdata.trim();
    filterdata = filterdata.toLowerCase();
    this.dataSource.filter = filterdata;
  }

  editEmp(emp){
    console.log(emp,"employee data in edit");
    this.empService.setEmpData(emp);
    this.router.navigate(['/employee/edit']);

  }

  deleteEmp(emp){
    console.log(emp,"delete emp ");
    this.empService.setEmpData(emp);
    this.modalRef = this.modalService.open(EmployeeDeleteComponent,{backdrop: 'static',keyboard: false});

  }

  addEmployee(){
    this.modalRef = this.modalService.open(EmployeeDetailComponent,{backdrop:'static',keyboard:false});
    this.modalRef.componentInstance.changeEmployeeDetails.subscribe(empdata=>{

      let index = this.Element_data.findIndex(elem => {
        return elem.id === empdata.id
      });
      if(index == -1){
        this.Element_data.push(empdata);
        this.empService.changeEmployeeData(this.Element_data);
        this.modalRef.close();
      }else{
        this.tsrService.error("Employee id already exists");
      }
      
    });
  }

}
