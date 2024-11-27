import { Component, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  standalone: true,
  imports: [],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  encapsulation: ViewEncapsulation.ShadowDom,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = "angular-module";
}
