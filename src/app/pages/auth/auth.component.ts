import { Component } from '@angular/core';
import { LogInComponent } from '../../components/log-in/log-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [LogInComponent,SignUpComponent,NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  IsLoginIn: boolean = false;

  onToggleDisplay() {
    this.IsLoginIn = !this.IsLoginIn
  }

}
