// cake-builder.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-cake-builder',
  templateUrl: './cake-builder.component.html',
  styleUrls: ['./cake-builder.component.css'],
})
export class CakeBuilderComponent {
  selectedCakeBase: string = 'vanilla';
  selectedToppings: { [topping: string]: boolean } = {};
  selectedFrosting: { [frostings: string]: boolean } = {};
  toppings: string[] = [
    'sprinkles',
    'chocolate chips',
    'nuts',
    'fruit',
    'candy',
    'whipped cream',
  ];

  submitCake() {
    // Handle the logic to submit the cake configuration
    alert(
      `Cake Configuration: base: ${this.selectedCakeBase} '\n' 
      toppings:
       ${Object.keys(this.selectedToppings).filter(
         (topping) => this.selectedToppings[topping]
       )} 
    `
    );
  }
}
