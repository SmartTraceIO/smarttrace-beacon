"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var new_shipment_routing_module_1 = require("./new-shipment-routing.module");
var new_shipment_component_1 = require("./new-shipment.component");
var NewShipmentModule = /** @class */ (function () {
    function NewShipmentModule() {
    }
    NewShipmentModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                new_shipment_routing_module_1.NewShipmentRoutingModule
            ],
            declarations: [
                new_shipment_component_1.NewShipmentComponent
            ],
            providers: [
                nativescript_barcodescanner_1.BarcodeScanner
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], NewShipmentModule);
    return NewShipmentModule;
}());
exports.NewShipmentModule = NewShipmentModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXNoaXBtZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1zaGlwbWVudC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDJFQUE2RDtBQUU3RCw2RUFBeUU7QUFDekUsbUVBQWdFO0FBaUJoRTtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBZjdCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHNEQUF3QjthQUMzQjtZQUNELFlBQVksRUFBRTtnQkFDViw2Q0FBb0I7YUFDdkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsNENBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQSxBQUFsQyxJQUFrQztBQUFyQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXInO1xuXG5pbXBvcnQgeyBOZXdTaGlwbWVudFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9uZXctc2hpcG1lbnQtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IE5ld1NoaXBtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vbmV3LXNoaXBtZW50LmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOZXdTaGlwbWVudFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZXdTaGlwbWVudENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEJhcmNvZGVTY2FubmVyXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5ld1NoaXBtZW50TW9kdWxlIHsgfVxuIl19