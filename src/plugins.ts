import { PluginDefinition, Plugin } from "@uxland/primary-shell";

const importer: () => Promise<Plugin> = () => import("../projects/my-plugin/src/plugin") as any;
// @ts-ignore
const clinicalMonitoringImporter: () => Promise<Plugin> = () => import("./clinical-monitoring.js") as any;
// @ts-ignore
const adminClinicalMonitoringImporter: () => Promise<Plugin> = () => import("./admin-clinical-monitoring.js") as any;

export const plugins: PluginDefinition[] = [
  { pluginId: "angular-plugin", importer: importer },
  { pluginId: "clinical-monitoring", importer: clinicalMonitoringImporter },
  // { pluginId: "admin-clinical-monitoring", importer: adminClinicalMonitoringImporter },
]