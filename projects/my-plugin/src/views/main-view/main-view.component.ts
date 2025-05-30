import { Component, ViewEncapsulation } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'lib-main-view',
  imports: [],
  template: `
    <div class="container">
      <h1>My angular Plugin Works</h1>
      <p>Current date: {{ formattedDate }}</p>
    </div>
  `,
  styles: [`
    .container {
      padding: 20px;
    }
    h1 {
      color: red;
    }
    p {
      margin-top: 10px;
      font-size: 18px;
    }
  `],
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MainViewComponent {
  formattedDate = format(new Date(), 'PPPP');
}
