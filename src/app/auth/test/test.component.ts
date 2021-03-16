

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Nanny } from '../../nanny/shared/nanny.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  newNanny : Nanny;
  title = 'angular-checkboxes-example';
  form: FormGroup;
  cities = [
    {name: 'Johannesburg'},
    {name: 'Randfontein'},
    {name: 'Pretoria'},
    {name: 'Randburg'},
    {name: 'Rustenburg'},
    {name: 'Polokwane'}
  ];
  provinces = [
    {name: 'Gauteng'},
    {name: 'North West'},
    {name: 'Limpopo'}
  ];
  Type: Array<any> = [
    { value: 'Stay Out' },
    { value: 'Stay In' },
    { value: 'Part time' },
    
  ];
  Qualifications: Array<any> = [
    { value: 'CPR' },
    { value: 'Child_care' },
    { value: 'Other' },
    
  ];
  KidsAge: Array<any> = [
    { value: '0-2 Years' },
    { value: '2-3 Years' },
    { value: '3-4 Years' }
    
  ];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      
      firstName: ['',Validators.required],
lastName: ['',Validators.required],
idNumber: ['',Validators.required],
type: this.fb.array([]),
image: ['',Validators.required],
age: ['',Validators.required],
gender: ['',Validators.required],
cell: ['',Validators.required],
streetName: ['',Validators.required],
city: ['',Validators.required],
province: ['',Validators.required],
hobbies: ['',Validators.required],
rate: ['',Validators.required],
health: ['',Validators.required],
church: ['',Validators.required],
qualification: this.fb.array([]),
criminalRecord: ['',Validators.required],
criminalDescription: ['',Validators.required],
yearsOfExperience: ['',Validators.required],
kidsAges: this.fb.array([]),
referenceName: ['',Validators.required],
referenceNumber: ['',Validators.required],
    })
  }
  onCheckboxChange(e) {
    const type: FormArray = this.form.get('type') as FormArray;
    
    const kidsAges: FormArray = this.form.get('kidsAges') as FormArray;
    if (e.target.checked) {
      type.push(new FormControl(e.target.value));
     } else {
      let i: number = 0;
      type.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          type.removeAt(i);
          return;
        }
        i++;
      });
  }
  }
  
  onCheckboxChange1(q) {
    const qualification: FormArray = this.form.get('qualification') as FormArray;
    if (q.target.checked) {
      qualification.push(new FormControl(q.target.value));
    } else {
      let i: number = 0;
      qualification.controls.forEach((item: FormControl) => {
        if (item.value == q.target.value) {
          qualification.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onCheckboxChange2(k) {
    const kidsAges: FormArray = this.form.get('kidsAges') as FormArray;
    if (k.target.checked) {
      kidsAges.push(new FormControl(k.target.value));
    } else {
      let i: number = 0;
      kidsAges.controls.forEach((item: FormControl) => {
        if (item.value == k.target.value) {
          kidsAges.removeAt(i);
          return;
        }
        i++;
      });
    }
  }



  submitForm() {
    console.log(this.form.value)
  }

  ngOnInit() {

  }

}