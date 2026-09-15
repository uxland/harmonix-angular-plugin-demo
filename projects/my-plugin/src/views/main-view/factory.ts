import { ApplicationRef, NgZone, Type } from "@angular/core";
import type { PrimariaApi } from "@uxland/primary-shell";
import { MainViewComponent } from "./main-view.component";

const viewAngularFactory = <C>(app: ApplicationRef, component: Type<C>, inputs: Record<string, unknown> = {}): () => Promise<HTMLElement> => () => {
    const host = document.createElement("host-component");
    app.injector.get(NgZone).run(() => {
      const componentRef = app.bootstrap(component, host);
      Object.entries(inputs).forEach(([key, value]) => componentRef.setInput(key, value));
      componentRef.changeDetectorRef.detectChanges();
    });
    return Promise.resolve(host);
  }

  export const viewFactory = (app: ApplicationRef, api: PrimariaApi) => viewAngularFactory(app, MainViewComponent, { api });
