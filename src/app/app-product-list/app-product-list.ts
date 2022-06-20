import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: `./app-product-list.html`,
  styleUrls: [`./app-product-list.css`],
})
export class appProductList {
  products = [
    {
      name: 'Java',
      descrition: '',
    },
    {
      name: 'JavaScript',
      descrition: '学习中',
    },
    {
      name: 'HTML',
      descrition: '已学完',
    },
  ];
  sharing() {
    alert('sharing already');
  }
}
