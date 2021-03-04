import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item ='cuc' ;
  @Output() newItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  addNewItemToList(value :string){
    this.newItem.emit(value);
  }

}
