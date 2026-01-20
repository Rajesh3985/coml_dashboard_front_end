import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-prs',
  imports: [CommonModule],
  templateUrl: './prs.html',
  styleUrl: './prs.css',
})
export class Prs {
currentPage: string = 'home';

  navigate(page: string) {
    this.currentPage = page;
  }
}
