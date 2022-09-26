import { Component } from '@angular/core';
import { CartService } from '../app/cartService'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cart';
  code: any;
  bookCount = 3;
  book: number = 0;
  saniCount = 10;
  sanitizer: number = 0;
  bagCount = 1;
  bag: number = 0;
  total = 0;
  grandTotal: any;
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.total = this.book + this.sanitizer + this.bag;

  }
  addItem(item: any) {
    if (item == 'book') {
      if (this.bookCount >= 3) {
        let request = {
          item: item,
          count: this.bookCount
        }
        this.cartService.addItems(request).subscribe(res => {
          this.book = res[0].book;
          this.total = this.book + this.sanitizer + this.bag;

        })

      } else {
        alert('Choose minimum 3')
  
      }
    } else if (item == 'sanitizer') {
      if (this.saniCount >= 10) {
        let request = {
          item: item,
          count: this.saniCount
        }
        this.cartService.addItems(request).subscribe(res => {
          this.sanitizer = res[0].sani;
          this.total = this.book + this.sanitizer + this.bag;

        })

      } else {
        alert('Choose minimum 10')

      }
    } else {
      if (this.bagCount > 0 && this.bagCount <= 2) {
        let request = {
          item: item,
          count: this.bagCount
        }
        this.cartService.addItems(request).subscribe(res => {
          this.bag = res[0].bag;
          this.total = this.book + this.sanitizer + this.bag;

        })

      } else if (this.bagCount > 2) {
        alert('Maximum number in a single purchase is limited to 2')
   
      }
    }
 

  }
  addCode() {
    this.grandTotal = this.total - 123
  }
}
