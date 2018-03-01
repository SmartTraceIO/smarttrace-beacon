import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { BarcodeScanner } from 'nativescript-barcodescanner';

import { NewShipmentRoutingModule } from "./new-shipment-routing.module";
import { NewShipmentComponent } from "./new-shipment.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NewShipmentRoutingModule
    ],
    declarations: [
        NewShipmentComponent
    ],
    providers: [
        BarcodeScanner
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NewShipmentModule { }
