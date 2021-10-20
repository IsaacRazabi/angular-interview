import { state } from '@angular/animations';
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import {query, update,remove } from '../store/counter.actions';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  @Output() Items = new EventEmitter<string>();
  items$: Observable<[]>;

  item: any = {name:'',type:''};
  items: any = [];
  baseItems: any;
  types: any = {};
  itemsState: any = [];
  showEditForm:boolean=false
  constructor(private store: Store<{ items: any }>) {
    this.items$ = this.store.pipe(select('items')) as Observable<[]>;
  }

  ngOnInit(): void {
    this.store.dispatch(query());
    this.items$.subscribe((todo: any) => {
      this.items = Object.values(todo);
      this.items = JSON.parse(JSON.stringify(this.items));
    });
    this.baseItems = this.items.map((item: any) => {
      return { ...item };
    });
  }

  update(name:any) {
    this.showEditForm=!this.showEditForm
    const idx = Object.values(this.items).findIndex((item:any)=>{
     return item.name===name.name
    })
   if(this.items[idx].active) delete this.items[idx].active
   else {this.items[idx].active=true}
  };
  updateItem(item:any){
    this.store.dispatch(update(item));
    const idx = Object.values(this.items).findIndex((item:any)=>{
     return item.name===item.name
    })
    if(this.items[idx].active) delete this.items[idx].active
    this.showEditForm=!this.showEditForm
  }
  remove(todo:any) {
    this.store.dispatch(remove(todo));
  }

  transferCard(ev: any, diff: any, txt: string) {
    let types = this.baseItems.map((type: any) => {
      return type.type;
    });
    types = [...new Set(types)];
    let position = +ev.target.dataset.id;
    this.items.forEach((todo: any) => {
      if (todo.name === txt) {
        todo.type = types[position + diff];
      }
    });

    //     this.types=({1:'Shopping list',2:'Home-work',3:'Finance',4:'others'})
  }

  addCard(type: any) {
    let msg = window.prompt('Please enter your text');
    if (!msg?.length) return;
    switch (type) {
      case 'Shopping list':
        console.log(type, 'Shopping list');
        this.items.push({ name: msg!, type: type });
        break;
      case 'Home-work':
        console.log(type, 'Home-work');
        this.items.push({ name: msg!, type: type });
        break;
      case 'Finance':
        console.log(type, 'Finance');
        this.items.push({ name: msg!, type: type });
        break;
      case 'others':
        console.log(type, 'others');
        this.items.push({ name: msg!, type: type });
        break;
      default:
        break;
    }
  }
  _addDemyData() {
    return [
      { name: 'buy milk', type: 'Shopping list' },
      { name: 'buy bread', type: 'Shopping list' },
      { name: 'buy cheese', type: 'Shopping list' },
      { name: 'angular practice', type: 'Home-work' },
      { name: 'vue practice', type: 'Home-work' },
      { name: 'react practice', type: 'Home-work' },
      { name: 'go to the bank', type: 'Finance' },
      { name: 'buy shares', type: 'Finance' },
      { name: 'take loan', type: 'Finance' },
      { name: 'clean house', type: 'others' },
      { name: 'clean car', type: 'others' },
      { name: 'call mom', type: 'others' },
    ];
  }
}
