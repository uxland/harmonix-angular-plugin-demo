import { bootstrapPlugins, initializeShell } from "@uxland/primary-shell";
import "@uxland/primary-shell/dist/style.css";
import { plugins } from "./plugins";

const createAndAppendSandboxApp = () => {
  const app = document.createElement("sandbox-app");
  document.body.appendChild(app);
  const sandbox = document.querySelector("sandbox-app");
  return sandbox as HTMLElement;
}

const initializeSandboxApp = (sandbox: HTMLElement) => {
  try {
    if (sandbox) {
        initializeShell(sandbox);
        bootstrapPlugins(plugins);
      }
    }
    catch (error) {
      console.warn(error);
    }
 }

const sandbox = createAndAppendSandboxApp();
initializeSandboxApp(sandbox);
