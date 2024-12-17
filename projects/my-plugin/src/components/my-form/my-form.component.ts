import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl} from "@angular/forms";

@Component({
  selector: 'lib-my-form',
  standalone: true,
  imports: [
  ],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyFormComponent {
  favoriteColorControl = new FormControl('');
}
