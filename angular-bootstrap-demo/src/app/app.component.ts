// import {Component, OnInit} from '@angular/core';
//
// interface ChangeSizeParams {
//   value: any;
// }
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'Demo';
//   name = "";
//   fontSize=14;
//   ngOnInit(): void {
//   }
//   clearValue(){
//     this.name='';
//   };
//
//   // changeSize({value}: ChangeSizeParams){
//   //   this.fontSize=value;
//   // }
//   hello = "123";
//
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-management-project';
}
