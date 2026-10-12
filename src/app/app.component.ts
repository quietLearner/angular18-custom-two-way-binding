import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RectComponent } from './rect/rect.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [FormsModule, RectComponent],
})
export class AppComponent {
  rectSize = signal<{ width: number; height: number }>({
    width: 100,
    height: 100,
  });

  updateDimension(dimension: 'width' | 'height', value: number) {
    this.rectSize.update((size) => ({ ...size, [dimension]: value }));
  }
}
