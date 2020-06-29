import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  data: any;
  param: any;

   // registration form-group with validations
   registerForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', Validators.required],
    number: ['',[Validators.required, Validators.maxLength(10)]]
  });
 // registration form-group with validations




// tslint:disable-next-line: max-line-length



  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private service: UsersService, private toastr: ToastrService) { }


  // get functions of form
get email() {return this.registerForm.get('email'); }
get firstName() {return this.registerForm.get('firstName'); }
get lastName() {return this.registerForm.get('lastName'); }
get number() {return this.registerForm.get('number')}
// toaster service call
showSuccess(data: any) {
  this.toastr.success(data);
}
showError(data: any) {
  this.toastr.error(data);
}
// toaster service call
 // get functions of form


// signup button function
onSubmit() {
  if (this.registerForm.invalid ) {


    this.registerForm.get('firstName').markAsTouched();
    this.registerForm.get('lastName').markAsTouched();
    this.registerForm.get('email').markAsTouched();
    this.registerForm.get('number').markAsTouched();

  } else {

    // register user service hit
    this.service.registerUser({


      fname: this.registerForm.value.firstName,
      lname: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      number:  this.registerForm.value.number,

  })
.subscribe((res) => {
  if (res.status === 400) {
    this.showError(res.message);
  } else {
  this.showSuccess(res.message);
  this.router.navigate([`${'/dashboard/users'}`]); }
});

// register user service hit


  }
}

// signup button function



  ngOnInit(): void {

  }
}
