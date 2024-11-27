import { PluginDefinition, Plugin } from "@uxland/primary-shell";

const importer: () => Promise<Plugin> = () => import("../projects/plugin/src/plugin") as any;
const importer2: () => Promise<Plugin> = () => import("../projects/plugin2/src/public-api") as any;
export const plugins: PluginDefinition[] = [
    { pluginId: "angular-plugin", importer: importer},
    { pluginId: "angular-plugin2", importer: importer2},

];
