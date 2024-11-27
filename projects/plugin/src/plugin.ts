import "@angular/compiler";
import { createApplication } from "@angular/platform-browser";
import { PrimariaApi, PrimariaMenuItem, shellRegions } from "@uxland/primary-shell";
import { mainViewFactory } from "./views/main/factory";



export const initialize = (api: PrimariaApi) => {
  console.log(`Plugin ${api.pluginInfo.pluginId} initialized`);
  console.log(api.regionManager.getRegion(shellRegions.navigationMenu));
  createApplication().then((app) => {
    api.regionManager.registerMainView({
      id: "plugin-main-view", 
      factory: mainViewFactory(app),
    } as any)

    api.regionManager.registerView(shellRegions.navigationMenu,{
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
