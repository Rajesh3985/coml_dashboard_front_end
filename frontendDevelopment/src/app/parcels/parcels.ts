import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parcels',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parcels.html',
  styleUrls: ['./parcels.css']
})
export class Parcels {
  currentPage: string = 'home';

  navigate(page: string) {
    this.currentPage = page;
  }
}
