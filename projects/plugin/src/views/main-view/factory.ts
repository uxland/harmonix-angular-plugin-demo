import { ApplicationRef } from "@angular/core";
import { viewAngularFactory } from "../../../../../shared/view-angular-factory";
import { MainViewComponent } from "./main-view.component";

export const mainViewFactory = (app:ApplicationRef) => viewAngularFactory(app, MainViewComponent);