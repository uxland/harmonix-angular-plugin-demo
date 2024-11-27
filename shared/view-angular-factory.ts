import { ApplicationRef, NgZone, Type } from "@angular/core";

export const viewAngularFactory = <C>(app: ApplicationRef, component: Type<C>): () => Promise<HTMLElement> => () => {
    const host = document.createElement("host-component");
    app.injector.get(NgZone).run(() => app.bootstrap(component, host));
    return Promise.resolve(host);
  }