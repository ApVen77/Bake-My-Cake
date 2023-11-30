import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css'],
})
export class AutoCompleteComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
