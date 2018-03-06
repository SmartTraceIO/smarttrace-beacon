import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Peripheral} from "nativescript-bluetooth";
import * as bluetooth from 'nativescript-bluetooth';
import * as observable from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array';

@Component({
    selector: "bluetooth",
    moduleId: module.id,
    templateUrl: "./bluetooth.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BluetoothComponent implements OnInit, AfterViewInit {

    peripherals: ObservableArray<any>;
    isLoading: boolean;

    constructor() {}

    ngOnInit(): void {
        this.checkBluetoothAndMakeItEnabled();
        this.isLoading = true;
        this.peripherals = new ObservableArray<any>();
        bluetooth.startScanning({
            serviceUUIDs: [], // pass an empty array to scan for all services
            seconds: 20, // passing in seconds makes the plugin stop scanning after <seconds> seconds
            onDiscovered: (peripheral: any) => {
                // peripherals.push(observable.fromObject(peripheral));
                console.log('peripheral', JSON.stringify(peripheral));
                this.peripherals.push(observable.fromObject(peripheral));

                console.log('Size: ', this.peripherals.length);
            }
        }).then(() => {
            this.isLoading = false;
            console.log('On fulfilled');

            this.startReadingData();
        }, (err) => {
            console.log('error', err);
        });
    }

    ngAfterViewInit(): void {

    }

    startReadingData(): void {
        this.peripherals.forEach((peri, i, []) => {
            bluetooth.connect({
                UUID: peri.UUID,
                onConnected: (data: Peripheral) => {
                    console.log('Peripheral: ', data);
                },
                onDisconnected: (data: Peripheral) => {}
            }).then(
                () => {},
                () => {}
            );
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
