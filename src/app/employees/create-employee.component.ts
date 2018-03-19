import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";
import {Employee} from '../models/employee.model';
import {EmployeeService} from '../employees/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 datePickerConfig: Partial <BsDatepickerConfig>;

  constructor(private _employeeService: EmployeeService,private _router: Router) { 
  this.datePickerConfig = Object.assign ({},{containerClass: 'theme-dark-blue',showWeekNumbers:false,minDate:new Date(2018,0,1), maxDate: new Date(2018,5,15),dateInputFormat: 'DD/MM/YYYY' })

  }
/*
  employee :Employee =  {
    id: null,
    name: null,
    gender: null,
    email: null,
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null
}
*/

  ngOnInit() {
  }

  // gender:string = "female";
  //contactPreference='email';
  //isActive = 'true';
  department = "-1";

  departments:Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  
  previewPhoto = false;
  /*saveEmployee(employeeForm: NgForm):void {
    console.log(employeeForm.value);

  }
*/
  saveEmployee(employeeForm: NgForm):void {
   this._employeeService.save(employeeForm.value);
   this._router.navigate(['list']);
  }

  togglePhotoPreview():void {
    this.previewPhoto = !this.previewPhoto;

  }

}
