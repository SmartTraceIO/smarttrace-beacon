import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NewShipmentComponent } from "./new-shipment.component";

const routes: Routes = [
    { path: "", component: NewShipmentComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NewShipmentRoutingModule { }
