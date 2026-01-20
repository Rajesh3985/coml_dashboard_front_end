import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-uts',
  imports: [CommonModule],
  templateUrl: './uts.html',
  styleUrl: './uts.css',
})
export class Uts {
 currentPage: string = 'home';

  navigate(page: string) {
    this.currentPage = page;
  }
}
