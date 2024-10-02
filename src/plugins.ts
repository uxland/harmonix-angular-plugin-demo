import { PluginDefinition, Plugin } from "@uxland/primary-shell";

const importer: () => Promise<Plugin> = () => import("../projects/plugin/src/plugin") as any;
export const plugins: PluginDefinition[] = [{ pluginId: "angular-plugin", importer: importer}];
