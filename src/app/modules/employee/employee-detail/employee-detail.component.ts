import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() empData;
  @Output() changeEmployeeDetails = new EventEmitter<number>();
  form;

  constructor(private router : Router, private activeModal : NgbActiveModal) { }

  ngOnInit() {
    if(this.empData){
      this.form = new FormGroup({
        id : new FormControl({value:null,disabled:true}),
        name : new FormControl('')
      });
      this.form.setValue({
        id : this.empData.id,
        name : this.empData.name
      })
    }else{
      this.form = new FormGroup({
        id : new FormControl(null,this.validateNumber.bind(this)),
        name : new FormControl('')
      });
    }
  }

  validateNumber(control: FormControl): { [s: string]: boolean } {

    //revised to reflect null as an acceptable value 
    if (control.value === null) return null;
  
    // check to see if the control value is no a number
    if (isNaN(control.value)) {
      return { 'NaN': true };
    }
  
    return null; 
  }

  employeeDetailsAdd(){
    console.log("inside employee detials");
    
    this.changeEmployeeDetails.emit(this.form.getRawValue());
  }

  Cancel(){
    this.activeModal.close();
    this.router.navigate(['/employee']);
  }

}
