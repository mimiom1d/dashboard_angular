import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private test: string = "HI";
  // private form: FormGroup;
  // public firstName = new FormControl("", Validators.required);
  // public lastName = new FormControl("", Validators.required);
  // public email = new FormControl("", Validators.required);

  // constructor(fb: FormBuilder) { 
  constructor() { 
    console.log("constructure entered");
    // this.form = fb.group({
    //     "firstName": this.firstName,
    //     "lastName": this.lastName,
    //     "email": this.email,
    //     "password":["", Validators.required]
    // });
  }

  ngOnInit() {
  }

  public updateValue(e){
    console.log("THis is event", e.target.value);
    this.test = e.target.value;
  }
  public onSubmitModelBased() {
      console.log("model-based form submitted");
      // console.log(this.form);
  } 

}
