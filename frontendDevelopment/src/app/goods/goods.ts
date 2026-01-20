import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service';

@Component({
  selector: 'app-goods',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './goods.html',
  styleUrls: ['./goods.css']
})
export class Goods implements OnInit {

  currentPage: string = 'input';

  goodsRow: any = {
    from_station: '',
    to_station: '',
    commodity: '',
    wagons: null,
    wagon_type: '',
    tonnage: null,
    freight: null,
    rr_number: '',
    placement_date: '',
    placement_time: '',
    free_time_from: '',
    free_time_to: '',
    release_date: '',
    release_time: '',
    kms: null
  };

  goodsList: any[] = [];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadGoods();
  }

  navigate(page: string): void {
    this.currentPage = page;
  }

  // ✅ SUBMIT GOODS (NO LOGIC CHANGE)
  submitGoods(): void {
    this.api.storeGoods(this.goodsRow).subscribe({
      next: (res) => {
        if (res?.success) {
          alert('Goods submitted successfully');
          this.resetForm();
          this.loadGoods();
        } else {
          alert('Submission failed');
        }
      },
      error: (err) => {
        console.error(err);
        alert('Failed to submit goods');
      }
    });
  }

  // ✅ LOAD GOODS LIST (FIXED RESPONSE HANDLING)
  loadGoods(): void {
    this.api.listGoods().subscribe({
      next: (res) => {
        this.goodsList = res?.data ?? [];
      },
      error: (err) => {
        console.error('Error loading goods:', err);
        this.goodsList = [];
      }
    });
  }

  resetForm(): void {
    this.goodsRow = {
      from_station: '',
      to_station: '',
      commodity: '',
      wagons: null,
      wagon_type: '',
      tonnage: null,
      freight: null,
      rr_number: '',
      placement_date: '',
      placement_time: '',
      free_time_from: '',
      free_time_to: '',
      release_date: '',
      release_time: '',
      kms: null
    };
  }
}
