import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from 'nativescript-barcodescanner';

@Component({
    selector: "new-shipment",
    moduleId: module.id,
    templateUrl: "./new-shipment.component.html"
})
export class NewShipmentComponent implements OnInit {
    constructor(private barcodeScanner: BarcodeScanner) {}

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    scanBarcode() {
        this.scan(false, false, false, 'landscape');
    }

    private scan(front: boolean, flip: boolean, torch?: boolean, orientation?: string) {
        this.barcodeScanner.scan({
            formats: "QR_CODE",
            cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
            cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
            message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
            preferFrontCamera: front,     // Android only, default false
            showFlipCameraButton: flip,   // default false
            showTorchButton: torch,       // iOS only, default false
            torchOn: false,               // launch with the flashlight on (default false)
            resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
            orientation: orientation,     // Android only, default undefined (sensor-driven orientation), other options: portrait|landscape
            beepOnScan: true,             // Play or Suppress beep on scan (default true)
            openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
            closeCallback: () => {
                console.log("Scanner closed @ " + new Date().getTime());
            }
        }).then(
            function (result) {
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
            },
            function (errorMessage) {
                let er = new Error();
                console.log('Error', er.stack);
                console.log("No scan. " + errorMessage);
            }
        );
    }
}
