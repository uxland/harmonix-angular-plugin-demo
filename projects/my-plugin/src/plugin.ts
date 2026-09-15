import "@angular/compiler";
import { createApplication } from "@angular/platform-browser";
import { PrimariaApi, PrimariaNavItem } from "@uxland/primary-shell";
import { viewFactory } from "./views/main-view/factory";
import { executeInjectHistoryItemsTask } from "./activity-history-plugin-integration/activity-history-actions";


export const initialize = (api: PrimariaApi) => {
    createApplication().then((app) => {
        console.log("App initialized")
        executeInjectHistoryItemsTask(api, app);

        api.regionManager.registerMainView({
          id: "plugin-main-view", // Aquí declarem la id de la vista
          factory: viewFactory(app, api),
        }); //Registrem la vista a la regió main amb la factoria declarada
        const navigationMenu = api.regionManager.regions.shell.navigationMenu;
        api.regionManager.registerView(navigationMenu,{
            id: "plugin-navigation-menu",
            factory: () => {
              const menuItem = new PrimariaNavItem({
                icon: "bolt",
                label: "Angular plugin",
                callbackFn: () => {
                  api.regionManager.activateMainView("plugin-main-view");
                },
              });
              return Promise.resolve(menuItem);
            },
          });
      });
    return Promise.resolve();
};

export const dispose = (api: PrimariaApi) => {
  const main = api.regionManager.regions.shell.main;
  api.regionManager.removeView(main, "plugin-main-view"); // Aquí utilitzem la id de la vista del main que volem eliminar
  const navigationMenu = api.regionManager.regions.shell.navigationMenu;
  api.regionManager.removeView(navigationMenu, "plugin-navigation-menu");
  return Promise.resolve();
}
