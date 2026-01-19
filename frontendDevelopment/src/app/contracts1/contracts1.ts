import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contracts1',
  imports: [CommonModule],
  templateUrl: './contracts1.html',
  styleUrl: './contracts1.css',
})
export class Contracts1 {
 currentPage: string = 'home';

  navigate(page: string) {
    this.currentPage = page;
  }
}

