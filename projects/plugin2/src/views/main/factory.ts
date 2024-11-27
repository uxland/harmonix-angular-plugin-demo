import { ApplicationRef } from "@angular/core";
import { viewAngularFactory } from "../../../../../shared/view-angular-factory";
import { AppComponent } from "./app.component";

export const mainViewFactory = (app:ApplicationRef) => viewAngularFactory(app, AppComponent);