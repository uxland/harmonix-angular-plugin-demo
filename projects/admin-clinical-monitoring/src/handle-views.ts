import { PrimariaApi, PrimariaNavItem } from "@uxland/primary-shell";
import { AdminClinicalMonitoring } from "./views/admin-clinical-monitoring/admin-clinical-monitoring";

export const registerViews = async (api: PrimariaApi) => {
  if (!customElements.get("clinical-monitoring")) {
    customElements.define("clinical-monitoring", AdminClinicalMonitoring as any);
  }
  api.regionManager.registerMainView({
    id: api.pluginInfo.pluginId,
    factory: () => {
      const mainItem = new AdminClinicalMonitoring();
      return Promise.resolve(mainItem as unknown as HTMLElement);
    },
    isDefault: true,
  });
  api.regionManager.registerView(api.regionManager.regions.shell.navigationMenu, {
    id: api.pluginInfo.pluginId,
    factory: () => {
      const menuItem = new PrimariaNavItem({
        icon: "account_box",
        label: "Seguiment administratiu",
        callbackFn: () => {
          api.regionManager.activateMainView(api.pluginInfo.pluginId);
        },
      });
      return Promise.resolve(menuItem);
    },
    sortHint: "0020",
  });

  setTimeout(() => {
    activateClinicalMonitoringView(api);
  }, 300);
};

export const unregisterViews = (api: PrimariaApi) => {
  api.regionManager.removeView(api.regionManager.regions.shell.main, api.pluginInfo.pluginId);
  api.regionManager.removeView(api.regionManager.regions.shell.navigationMenu, api.pluginInfo.pluginId);
};

export const activateClinicalMonitoringView = (api: PrimariaApi) => {
  api.regionManager.activateMainView(api.pluginInfo.pluginId);
};
