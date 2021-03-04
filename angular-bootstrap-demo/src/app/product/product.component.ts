// import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
//
// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.css']
// })
// export class ProductComponent implements OnInit {
//   @Input()
//   nameA = "chien is stupid";
//   @Output() newName=new EventEmitter()
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }
import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = {};
  status = false;
  products : Product [] =[{
    id: 1,
    name: ' iphone1',
    price : 100000
    },
    {
      id: 2,
      name: ' iphone2',
      price : 1000000
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.status=!this.status;
  }

}
