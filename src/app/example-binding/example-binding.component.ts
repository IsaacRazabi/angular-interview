import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-example-binding',
  templateUrl: './example-binding.component.html',
  styleUrls: ['./example-binding.component.css']
})
export class ExampleBindingComponent implements OnInit {
 @Input() items?:any
  constructor() { }

  ngOnInit(): void {
  }

}
