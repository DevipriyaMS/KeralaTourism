import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {

  loginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  // loginForm: FormGroup;
  // constructor(private fb: FormBuilder) {
  //   this.loginForm = this.fb.group({
  //     username: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required]
  //   });
  // }
  ngOnInit(): void {
    this.loginForm= new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
    }
  }

  @Output() signupRequested = new EventEmitter<boolean>();

  onSignupClick() {
    this.signupRequested.emit(true);
  }
}
