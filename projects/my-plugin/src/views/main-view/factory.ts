import { ApplicationRef, NgZone, Type } from "@angular/core";
import { MainViewComponent } from "./main-view.component";

const viewAngularFactory = <C>(app: ApplicationRef, component: Type<C>): () => Promise<HTMLElement> => () => {
    const host = document.createElement("host-component");
    app.injector.get(NgZone).run(() => app.bootstrap(component, host));
    return Promise.resolve(host);
  }

  export const viewFactory = (app:ApplicationRef)  => viewAngularFactory(app, MainViewComponent);