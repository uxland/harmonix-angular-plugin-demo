import { Component, Input, ViewEncapsulation } from "@angular/core";
import type { IActivityHistoryItem } from "@uxland/primary-shell";

@Component({
  selector: "lib-activity-history-item",
  standalone: true,
  imports: [],
  template: `
    <div>
      {{ item?.date }} | {{ item?.id }} | {{ item?.professional?.name }} |
      {{ item?.professional?.speciality?.description }} |
      {{ item?.center?.description }}
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 10px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ActivityHistoryItemComponent {
  @Input() item!: IActivityHistoryItem;
}
