import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement } from '../store/counter.actions';


interface Items {
  name: string;
  type?: string;
}

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent {
  @Output()Items = new EventEmitter<string>()

  item: object = {};
  items: Array<Items> = this._addDemyData();
  baseItems = this.items.map(a => {return {...a}})
  types:any={}
  itemsState:any=[]
  constructor(private store: Store<{ item:Object }>) {
    
  }
 
  // increment() {
    // this.store.dispatch(increment());
  // }

  // decrement() {
  //   this.store.dispatch(decrement());
  // }



  transferCard(ev:any,diff:any,txt:string){
  let types= this.baseItems.map(type=>{
   return type.type
  })
  types = [...new Set(types)];
    let position = +(ev.target.dataset.id);
      this.items.forEach(todo=>{
      if(todo.name===txt) {
        todo.type = types[position+diff];
      }
     })    
    
//     this.types=({1:'Shopping list',2:'Home-work',3:'Finance',4:'others'})

  }

  addCard(type: any) {
    let msg = window.prompt('Please enter your text');
    if(!msg?.length) return
    switch (type) {
      case 'Shopping list':
        console.log(type, 'Shopping list');
        this.items.push({ name: msg! , type: type });
        break;
      case 'Home-work':
        console.log(type, 'Home-work');
        this.items.push({ name: msg! , type: type });
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
  _addDemyData(){
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
    { name: 'call mom', type: 'others' }
    ]
  }
}
