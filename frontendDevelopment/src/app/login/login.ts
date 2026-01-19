import { Component } from '@angular/core';
import { ApiService } from '../service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

    if (!this.username || !this.password) {
      this.errorMsg = 'Username and Password are required';
      return;
    }

    this.api.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res: any) => {

        // ✅ navigate based on backend role
        if (res.success && res.navigate_to) {
          this.router.navigate(['/' + res.navigate_to]);
        } else {
          this.errorMsg = 'Login failed';
        }

      },
      error: () => {
        this.errorMsg = 'Invalid Username or Password';
      }
    });
  }
}
