import { PluginDefinition, Plugin } from "@uxland/primary-shell";

const importer: () => Promise<Plugin> = () => import("../projects/my-plugin/src/plugin") as any;
const clinicalMonitoringImporter: () => Promise<Plugin> = () => import("../projects/clinical-monitoring/src/plugin") as any;
const adminClinicalMonitoringImporter: () => Promise<Plugin> = () => import("../projects/admin-clinical-monitoring/src/plugin") as any;

export const plugins: PluginDefinition[] = [
  { pluginId: "angular-plugin", importer: importer },
  { pluginId: "clinical-monitoring", importer: clinicalMonitoringImporter },
  /* { pluginId: "admin-clinical-monitoring", importer: adminClinicalMonitoringImporter }, */
]