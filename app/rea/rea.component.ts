import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rea',
  templateUrl: './rea.component.html',
  styleUrls: ['./rea.component.scss']
})
export class ReaComponent implements OnInit {


f : FormGroup;
submitted : boolean = false;

constructor(private fb:FormBuilder) {

  this.f = this.fb.group({
    firstName : ['',Validators.required],
    lastName:['',Validators.required],
    title:['',Validators.required],
    dob:['',Validators.required],
    state:['',Validators.required],
    city:['',Validators.required],
    zip:['',Validators.required],
    gender:['',Validators.required],
    agree:['',Validators.required],

  })
}

ngOnInit(): void {
  this.f.controls['firstName'].setValue("");

}
submit()

{
  this.submitted = true;
  console.log(this.f.value);
  console.log(this.f.controls['firstName'].value);
}




}
