import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { BluetoothRoutingModule } from "./bluetooth-routing.module";
import { BluetoothComponent } from "./bluetooth.component";

@NgModule({
    imports: [
        NativeScriptModule,
        BluetoothRoutingModule
    ],
    declarations: [
        BluetoothComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BluetoothModule { }
