import { createApplication } from "@angular/platform-browser";
import { PrimariaApi, PrimariaMenuItem, shellRegions } from "@uxland/primary-shell";
import { viewFactory } from "./views/main-view/factory";

export const initialize = (api: PrimariaApi) => {
    console.log("")
    createApplication().then((app) => {
        console.log("App initialized")
        api.regionManager.registerMainView({
          id: "plugin-main-view", // Aquí declarem la id de la vista
          factory: viewFactory(app), 
        }); //Registrem la vista a la regio main amb la factoria declarada
        api.regionManager.registerView(shellRegions.navigationMenu,{
            id: "plugin-quick-action",
            factory: () => Promise.resolve(new PrimariaMenuItem("add_circle_outline", "Angular plugin", () => {
              api.regionManager.activateMainView("plugin-main-view");
            })),
          });
      });
    return Promise.resolve();
};

export const dispose = (api: PrimariaApi) => {
    api.regionManager.removeView(shellRegions.main, "plugin-main-view"); // Aquí utilitzem la id de la vista del main que volem eliminar
    return Promise.resolve();
}