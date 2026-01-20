import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nfr',
  imports: [CommonModule],
  templateUrl: './nfr.html',
  styleUrl: './nfr.css',
})
export class NFR {
currentPage: string = 'home';

  navigate(page: string) {
    this.currentPage = page;
  }
}
