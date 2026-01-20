import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service';  // adjust path

@Component({
  selector: 'app-goods',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goods.html',
  styleUrls: ['./goods.css']
})
export class Goods {

  currentPage = 'home';

  goodsRow = {
    from: '',
    to: '',
    commodity: '',
    wagons: null,
    type: '',
    tonnage: null,
    freight: null,
    rrNumber: ''
  };

  constructor(private api: ApiService, private router: Router) {}

  navigate(page: string) {
    this.currentPage = page;
  }

  submitGoods() {
    this.api.submitGoods(this.goodsRow).subscribe({
      next: (res) => {
        console.log('Data submitted successfully', res);
        alert('Goods data submitted successfully!');
        this.goodsRow = { from: '', to: '', commodity: '', wagons: null, type: '', tonnage: null, freight: null, rrNumber: '' };
      },
      error: (err) => {
        console.error('Error submitting data', err);
        alert('Failed to submit goods data.');
      }
    });
  }
}
