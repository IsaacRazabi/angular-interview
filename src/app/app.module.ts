import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { ExampleBindingComponent } from './example-binding/example-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    ExampleBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    StoreModule.forRoot({
      items: counterReducer 
    }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
