"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var NewShipmentComponent = /** @class */ (function () {
    function NewShipmentComponent(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
    }
    NewShipmentComponent.prototype.ngOnInit = function () {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    };
    NewShipmentComponent.prototype.scanBarcode = function () {
        this.scan(false, false, false, 'landscape');
    };
    NewShipmentComponent.prototype.scan = function (front, flip, torch, orientation) {
        this.barcodeScanner.scan({
            formats: "QR_CODE",
            cancelLabel: "EXIT. Also, try the volume buttons!",
            cancelLabelBackgroundColor: "#333333",
            message: "Use the volume buttons for extra light",
            preferFrontCamera: front,
            showFlipCameraButton: flip,
            showTorchButton: torch,
            torchOn: false,
            resultDisplayDuration: 500,
            orientation: orientation,
            beepOnScan: true,
            openSettingsIfPermissionWasPreviouslyDenied: true,
            closeCallback: function () {
                console.log("Scanner closed @ " + new Date().getTime());
            }
        }).then(function (result) {
            console.log("--- scanned: " + result.text);
            // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
            setTimeout(function () {
                // if this alert doesn't show up please upgrade to {N} 2.4.0+
                alert({
                    title: "Scan result",
                    message: "Format: " + result.format + ",\nValue: " + result.text,
                    okButtonText: "OK"
                });
            }, 500);
        }, function (errorMessage) {
            var er = new Error();
            console.log('Error', er.stack);
            console.log("No scan. " + errorMessage);
        });
    };
    NewShipmentComponent = __decorate([
        core_1.Component({
            selector: "new-shipment",
            moduleId: module.id,
            templateUrl: "./new-shipment.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner])
    ], NewShipmentComponent);
    return NewShipmentComponent;
}());
exports.NewShipmentComponent = NewShipmentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LXNoaXBtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1zaGlwbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMkVBQTZEO0FBTzdEO0lBQ0ksOEJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7SUFFdEQsdUNBQVEsR0FBUjtRQUNJOztzRUFFOEQ7SUFDbEUsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTyxtQ0FBSSxHQUFaLFVBQWEsS0FBYyxFQUFFLElBQWEsRUFBRSxLQUFlLEVBQUUsV0FBb0I7UUFDN0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDckIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCwwQkFBMEIsRUFBRSxTQUFTO1lBQ3JDLE9BQU8sRUFBRSx3Q0FBd0M7WUFDakQsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixvQkFBb0IsRUFBRSxJQUFJO1lBQzFCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLE9BQU8sRUFBRSxLQUFLO1lBQ2QscUJBQXFCLEVBQUUsR0FBRztZQUMxQixXQUFXLEVBQUUsV0FBVztZQUN4QixVQUFVLEVBQUUsSUFBSTtZQUNoQiwyQ0FBMkMsRUFBRSxJQUFJO1lBQ2pELGFBQWEsRUFBRTtnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUM1RCxDQUFDO1NBQ0osQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFVLE1BQU07WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsK0ZBQStGO1lBQy9GLFVBQVUsQ0FBQztnQkFDUCw2REFBNkQ7Z0JBQzdELEtBQUssQ0FBQztvQkFDRixLQUFLLEVBQUUsYUFBYTtvQkFDcEIsT0FBTyxFQUFFLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSTtvQkFDaEUsWUFBWSxFQUFFLElBQUk7aUJBQ3JCLENBQUMsQ0FBQztZQUNQLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDbEIsSUFBSSxFQUFFLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBakRRLG9CQUFvQjtRQUxoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7U0FDL0MsQ0FBQzt5Q0FFc0MsNENBQWM7T0FEekMsb0JBQW9CLENBa0RoQztJQUFELDJCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJuZXctc2hpcG1lbnRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbmV3LXNoaXBtZW50LmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTmV3U2hpcG1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZVNjYW5uZXI6IEJhcmNvZGVTY2FubmVyKSB7fVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIH1cblxuICAgIHNjYW5CYXJjb2RlKCkge1xuICAgICAgICB0aGlzLnNjYW4oZmFsc2UsIGZhbHNlLCBmYWxzZSwgJ2xhbmRzY2FwZScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2Nhbihmcm9udDogYm9vbGVhbiwgZmxpcDogYm9vbGVhbiwgdG9yY2g/OiBib29sZWFuLCBvcmllbnRhdGlvbj86IHN0cmluZykge1xuICAgICAgICB0aGlzLmJhcmNvZGVTY2FubmVyLnNjYW4oe1xuICAgICAgICAgICAgZm9ybWF0czogXCJRUl9DT0RFXCIsXG4gICAgICAgICAgICBjYW5jZWxMYWJlbDogXCJFWElULiBBbHNvLCB0cnkgdGhlIHZvbHVtZSBidXR0b25zIVwiLCAvLyBpT1Mgb25seSwgZGVmYXVsdCAnQ2xvc2UnXG4gICAgICAgICAgICBjYW5jZWxMYWJlbEJhY2tncm91bmRDb2xvcjogXCIjMzMzMzMzXCIsIC8vIGlPUyBvbmx5LCBkZWZhdWx0ICcjMDAwMDAwJyAoYmxhY2spXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlVzZSB0aGUgdm9sdW1lIGJ1dHRvbnMgZm9yIGV4dHJhIGxpZ2h0XCIsIC8vIEFuZHJvaWQgb25seSwgZGVmYXVsdCBpcyAnUGxhY2UgYSBiYXJjb2RlIGluc2lkZSB0aGUgdmlld2ZpbmRlciByZWN0YW5nbGUgdG8gc2NhbiBpdC4nXG4gICAgICAgICAgICBwcmVmZXJGcm9udENhbWVyYTogZnJvbnQsICAgICAvLyBBbmRyb2lkIG9ubHksIGRlZmF1bHQgZmFsc2VcbiAgICAgICAgICAgIHNob3dGbGlwQ2FtZXJhQnV0dG9uOiBmbGlwLCAgIC8vIGRlZmF1bHQgZmFsc2VcbiAgICAgICAgICAgIHNob3dUb3JjaEJ1dHRvbjogdG9yY2gsICAgICAgIC8vIGlPUyBvbmx5LCBkZWZhdWx0IGZhbHNlXG4gICAgICAgICAgICB0b3JjaE9uOiBmYWxzZSwgICAgICAgICAgICAgICAvLyBsYXVuY2ggd2l0aCB0aGUgZmxhc2hsaWdodCBvbiAoZGVmYXVsdCBmYWxzZSlcbiAgICAgICAgICAgIHJlc3VsdERpc3BsYXlEdXJhdGlvbjogNTAwLCAgIC8vIEFuZHJvaWQgb25seSwgZGVmYXVsdCAxNTAwIChtcyksIHNldCB0byAwIHRvIGRpc2FibGUgZWNob2luZyB0aGUgc2Nhbm5lZCB0ZXh0XG4gICAgICAgICAgICBvcmllbnRhdGlvbjogb3JpZW50YXRpb24sICAgICAvLyBBbmRyb2lkIG9ubHksIGRlZmF1bHQgdW5kZWZpbmVkIChzZW5zb3ItZHJpdmVuIG9yaWVudGF0aW9uKSwgb3RoZXIgb3B0aW9uczogcG9ydHJhaXR8bGFuZHNjYXBlXG4gICAgICAgICAgICBiZWVwT25TY2FuOiB0cnVlLCAgICAgICAgICAgICAvLyBQbGF5IG9yIFN1cHByZXNzIGJlZXAgb24gc2NhbiAoZGVmYXVsdCB0cnVlKVxuICAgICAgICAgICAgb3BlblNldHRpbmdzSWZQZXJtaXNzaW9uV2FzUHJldmlvdXNseURlbmllZDogdHJ1ZSwgLy8gT24gaU9TIHlvdSBjYW4gc2VuZCB0aGUgdXNlciB0byB0aGUgc2V0dGluZ3MgYXBwIGlmIGFjY2VzcyB3YXMgcHJldmlvdXNseSBkZW5pZWRcbiAgICAgICAgICAgIGNsb3NlQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNjYW5uZXIgY2xvc2VkIEAgXCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0gc2Nhbm5lZDogXCIgKyByZXN1bHQudGV4dCk7XG4gICAgICAgICAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgUHJvbWlzZSBpcyBuZXZlciBpbnZva2VkIHdoZW4gYSAnY29udGludW91c1NjYW5DYWxsYmFjaycgZnVuY3Rpb24gaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBhbGVydCBkb2Vzbid0IHNob3cgdXAgcGxlYXNlIHVwZ3JhZGUgdG8ge059IDIuNC4wK1xuICAgICAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTY2FuIHJlc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJGb3JtYXQ6IFwiICsgcmVzdWx0LmZvcm1hdCArIFwiLFxcblZhbHVlOiBcIiArIHJlc3VsdC50ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVyID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXIuc3RhY2spO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gc2Nhbi4gXCIgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==