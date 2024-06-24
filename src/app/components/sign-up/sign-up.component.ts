import { DatePipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  providers: [DatePipe],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  constructor(private datePipe: DatePipe) {}

  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  // constructor(private fb: FormBuilder) {
  //   this.signupForm = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //     confirmPassword: ['', Validators.required]
  //   });
  // }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  // onSubmit(signupForm:any) {
  //   if (this.signupForm.valid) {
  //     const newdob = this.datePipe.transform(signupForm.value.dob, 'MMMM d, y')
  //     console.log('Form Submitted',{ ...signupForm.value, dob: newdob});
  //   }
  // }

  onSubmit(){
    if (this.signupForm.valid){
      console.log('Form Submitted', this.signupForm.value)
    }
  }

  @Output() signupRequested = new EventEmitter<boolean>();

  onSignupClick() {
    this.signupRequested.emit(true);
  }

}
