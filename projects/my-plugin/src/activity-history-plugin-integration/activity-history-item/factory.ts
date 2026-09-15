import { ApplicationRef, NgZone } from "@angular/core";
import type { IActivityHistoryItem } from "@uxland/primary-shell";
import { ActivityHistoryItemComponent } from "./activity-history-item.component";

export const activityHistoryItemFactory =
  (app: ApplicationRef) =>
  (props: { item: IActivityHistoryItem }): Promise<HTMLElement> => {
    const host = document.createElement("activity-history-item-host");
    app.injector.get(NgZone).run(() => {
      const componentRef = app.bootstrap(ActivityHistoryItemComponent, host);
      componentRef.setInput("item", props.item);
      componentRef.changeDetectorRef.detectChanges();
    });
    return Promise.resolve(host);
  };
