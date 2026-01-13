import { Component } from '@angular/core';
import { ApiService } from '../service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {

  username = '';
  password = '';
  errorMsg = '';
  showPassword = false;

  constructor(private api: ApiService, private router: Router) {}
  login(): void {
    this.api.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: () => this.router.navigate(['/home']),
      error: () => this.errorMsg = 'Invalid Username or Password'
    });
  }
}