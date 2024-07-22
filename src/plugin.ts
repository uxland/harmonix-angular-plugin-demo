import { ApplicationRef, NgZone, Type } from "@angular/core";
import { createApplication } from "@angular/platform-browser";
import { PrimariaApi, PrimariaMenuItem, shellRegions } from "@uxland/primary-shell";
import { AppComponent } from "./app/app.component";

const viewAngularFactory = <C>(app: ApplicationRef, component: Type<C>): () => Promise<HTMLElement> => () => {
  const host = document.createElement("host-component");
  app.injector.get(NgZone).run(() => app.bootstrap(component, host));
  return Promise.resolve(host);
}

export const initialize = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} initialized`);

  createApplication().then((app) => {
    api.regionManager.registerMainView({
      id: "plugin-main-view",
      factory: viewAngularFactory(app, AppComponent),
    } as any, "Angular plugin")

    api.regionManager.registerQuickAction({
      id: "plugin-quick-action",
      factory: () => Promise.resolve(new PrimariaMenuItem("add_circle_outline", "Angular plugin", () => {
        api.regionManager.activateMainView("plugin-main-view")
      })),
    });
  });

  return Promise.resolve();
};

export const dispose = (api: PrimariaApi) => {
  api.regionManager.removeView(shellRegions.main, "plugin-main-view");
};
