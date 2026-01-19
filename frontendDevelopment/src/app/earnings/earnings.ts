import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-earnings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './earnings.html',
  styleUrls: ['./earnings.css']
})
export class Earnings {
  currentPage: string = 'home';

  navigate(page: string) {
    this.currentPage = page;
  }
}
