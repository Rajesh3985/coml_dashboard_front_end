import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goods',
   standalone: true,       // mark as standalone
  imports: [CommonModule],
  templateUrl: './goods.html',
  styleUrls: ['./goods.css']
})
export class Goods {
  currentPage: string = 'home';

  navigate(page: string) {
    this.currentPage = page;
  }
}
