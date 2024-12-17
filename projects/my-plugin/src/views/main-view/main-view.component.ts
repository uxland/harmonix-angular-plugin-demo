import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { MyFormComponent } from '../../components/my-form/my-form.component';

@Component({
  selector: 'lib-main-view',
  imports: [
    MyFormComponent
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css',
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MainViewComponent {

}
