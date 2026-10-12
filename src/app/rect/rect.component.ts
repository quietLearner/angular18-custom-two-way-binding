import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Angular recognizes size and sizeChange as a two-way binding pair.
  size = input.required<{ width: number; height: number }>();
  //The convention is inputName + Change, with a capital C.
  sizeChange = output<{ width: number; height: number }>();

  onReset() {
    this.sizeChange.emit({
      width: 200,
      height: 100,
    });
  }
}
