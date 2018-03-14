import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Department} from '../models/department.model';
import {BsDatepickerConfig} from "ngx-bootstrap/datepicker";


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
 datePickerConfig: Partial <BsDatepickerConfig>
  constructor() { 
  this.datePickerConfig = Object.assign ({},{containerClass: 'theme-dark-blue',showWeekNumbers:false,minDate:new Date(2018,0,1), maxDate: new Date(2018,5,15),dateInputFormat: 'DD/MM/YYYY' })

  }

  ngOnInit() {
  }

  // gender:string = "female";
  //contactPreference='email';
  //isActive = 'true';
  //department = "3";

  departments:Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  
  previewPhoto = false;
  saveEmployee(employeeForm: NgForm):void {
    console.log(employeeForm.value);
  }

  togglePhotoPreview():void {
    this.previewPhoto = !this.previewPhoto;

  }

}
