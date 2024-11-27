import { Component, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  standalone: true,
  imports: [],
  templateUrl: "./main-view.component.html",
  styleUrl: "./main-view.component.css",
  encapsulation: ViewEncapsulation.ShadowDom,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainViewComponent {
  title = "angular-module";
}
