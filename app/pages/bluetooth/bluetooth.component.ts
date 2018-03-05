import { Component, OnInit } from "@angular/core";
import * as bluetooth from 'nativescript-bluetooth';
import * as observable from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array';

@Component({
    selector: "Bluetooth",
    moduleId: module.id,
    templateUrl: "./bluetooth.component.html"
})
export class BluetoothComponent implements OnInit {
    peripherals: ObservableArray<any>;
    isLoading: boolean;

    constructor() {}

    ngOnInit(): void {
        this.checkBluetoothAndMakeItEnabled();
        this.peripherals = new ObservableArray();
        this.isLoading = true;
        bluetooth.startScanning({
            serviceUUIDs: [], // pass an empty array to scan for all services
            seconds: 4, // passing in seconds makes the plugin stop scanning after <seconds> seconds
            onDiscovered: (peripheral: any) => {
                // peripherals.push(observable.fromObject(peripheral));
                console.log('peripheral', JSON.stringify(peripheral));
                this.peripherals.push(observable.fromObject(peripheral));
            }
        }).then(() => {
            this.isLoading = false;
            console.log('On fulfilled');
        }, (err) => {
            console.log('error', err);
        });
    }

    checkBluetoothAndMakeItEnabled(): void {
        bluetooth.isBluetoothEnabled().then(
            (enabled: boolean) => {
                console.log('Enabled?', enabled);
                if (!enabled) {
                    bluetooth.enable().then(
                        (agreed: boolean) => {
                            // --
                        },
                        () => {}
                    );
                }
            },
            () => {}
        );
    }
}
