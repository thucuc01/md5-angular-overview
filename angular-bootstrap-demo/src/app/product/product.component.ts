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
  constructor() { }

  ngOnInit() {
  }

}
