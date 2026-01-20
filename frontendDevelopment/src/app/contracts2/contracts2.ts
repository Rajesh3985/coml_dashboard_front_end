import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contracts2',
  imports: [CommonModule],
  templateUrl: './contracts2.html',
  styleUrl: './contracts2.css',
})
export class Contracts2 {
 currentPage: string = 'home';

  navigate(page: string) {
    this.currentPage = page;
  }
}

