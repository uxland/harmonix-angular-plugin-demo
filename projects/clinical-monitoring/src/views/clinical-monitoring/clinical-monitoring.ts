import { PrimariaRegionHost } from "@uxland/primary-shell";
import { IRegion, region } from "@uxland/regions";
import { LitElement, css, html } from "lit";
import { template } from "./template";

export class ClinicalMonitoring extends PrimariaRegionHost(LitElement) {
  render() {
    return html`${template(this)}`;
  }

  static styles = css`
    :host {
      min-height: 1px;
      height: 100%;
      width: 100%;
    }

    .wrapper {
      position: relative;
      min-height: 1px;
      height: 100%;
      display: flex;
      flex-direction: row;
    }

    #widgets-sidebar-region {
      width: 25%;
      border-left: 1px solid rgb(189, 189, 189);
      overflow: auto;
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    #header-widgets-region {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      padding: 24px 24px 0 24px;
    }

    #content-widgets-region {
      flex: 1;
      min-height: 1px;
      height: 100%;
      padding: 24px;
    }

    @media (max-width: 1439px) {
      :host {
        min-height: 100vh;
      }
      .wrapper {
        flex-direction: column;
      }
      #widgets-sidebar-region {
        max-width: 100%;
        width: auto;
        border-left: none;
        overflow: auto;
        min-height: 100%;
      }
      #content-widgets-region {
        height: 70vh;
        flex: none;
      }
    }
  `;

  firstUpdated() {
    this._observeMaximizedState();
  }

  private _observeMaximizedState() {
    const contentRegion = this['renderRoot'].querySelector("#content-widgets-region");
    if (!contentRegion) return;

    const observer = new MutationObserver(() => {
      const activity = contentRegion.querySelector("activity-history-main");
      if (!activity) return;

      const isMaximized = activity.hasAttribute("maximized") || activity.maximized;
      this._toggleWidgetsVisibility(!isMaximized);
    });

    observer.observe(contentRegion, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["maximized"],
    });
  }

  private _toggleWidgetsVisibility(show: boolean) {
    const sidebar = this['renderRoot'].querySelector("#widgets-sidebar-region");
    const header = this['renderRoot'].querySelector("#header-widgets-region");

    if (sidebar) sidebar.style.display = show ? "" : "none";
    if (header) header.style.display = show ? "" : "none";
  }

  @region({ targetId: "widgets-sidebar-region", name: "clinical-monitoring-widgets-sidebar-region" })
  sidebarRegion: IRegion | undefined;

  @region({ targetId: "header-widgets-region", name: "clinical-monitoring-header-widgets-region" })
  headerRegion: IRegion | undefined;

  @region({ targetId: "content-widgets-region", name: "clinical-monitoring-content-widgets-region" })
  contentRegion: IRegion | undefined;
}
