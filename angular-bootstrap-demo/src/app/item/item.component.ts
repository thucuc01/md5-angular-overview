import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  ok='Iphone12';
  items : string[] = ['iphone 5', 'iphone 6']
  constructor() { }

  ngOnInit(): void {
  }

  addItem ($event: any){
    this.items.push($event)
  }
}
