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
  selectedType = '';   // ✅ added
  errorMsg = '';
  showPassword = false;

  constructor(private api: ApiService, private router: Router) {}

  login(): void {

    if (!this.selectedType) {
      this.errorMsg = 'Please select a type';
      return;
    }

    this.api.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: () => {
        // ✅ navigation based on selected type
        if (this.selectedType === 'goods') {
          this.router.navigate(['/goods-home']);
        } else if (this.selectedType === 'parcels') {
          this.router.navigate(['/parcels-home']);
        } else if (this.selectedType === 'earnings') {
          this.router.navigate(['/earnings-home']);
        }
      },
      error: () => this.errorMsg = 'Invalid Username or Password'
    });
  }
}
