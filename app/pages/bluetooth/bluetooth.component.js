"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bluetooth = require("nativescript-bluetooth");
var observable = require("tns-core-modules/data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var BluetoothComponent = /** @class */ (function () {
    function BluetoothComponent() {
    }
    BluetoothComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkBluetoothAndMakeItEnabled();
        this.peripherals = new observable_array_1.ObservableArray();
        this.isLoading = true;
        bluetooth.startScanning({
            serviceUUIDs: [],
            seconds: 4,
            onDiscovered: function (peripheral) {
                // peripherals.push(observable.fromObject(peripheral));
                console.log('peripheral', JSON.stringify(peripheral));
                _this.peripherals.push(observable.fromObject(peripheral));
            }
        }).then(function () {
            _this.isLoading = false;
            console.log('On fulfilled');
        }, function (err) {
            console.log('error', err);
        });
    };
    BluetoothComponent.prototype.checkBluetoothAndMakeItEnabled = function () {
        bluetooth.isBluetoothEnabled().then(function (enabled) {
            console.log('Enabled?', enabled);
            if (!enabled) {
                bluetooth.enable().then(function (agreed) {
                    // --
                }, function () { });
            }
        }, function () { });
    };
    BluetoothComponent = __decorate([
        core_1.Component({
            selector: "Bluetooth",
            moduleId: module.id,
            templateUrl: "./bluetooth.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], BluetoothComponent);
    return BluetoothComponent;
}());
exports.BluetoothComponent = BluetoothComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1ZXRvb3RoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsdWV0b290aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0RBQW9EO0FBQ3BELDZEQUErRDtBQUMvRCwyRUFBeUU7QUFPekU7SUFJSTtJQUFlLENBQUM7SUFFaEIscUNBQVEsR0FBUjtRQUFBLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFNBQVMsQ0FBQyxhQUFhLENBQUM7WUFDcEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsT0FBTyxFQUFFLENBQUM7WUFDVixZQUFZLEVBQUUsVUFBQyxVQUFlO2dCQUMxQix1REFBdUQ7Z0JBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzdELENBQUM7U0FDSixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUUsVUFBQyxHQUFHO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkRBQThCLEdBQTlCO1FBQ0ksU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUMvQixVQUFDLE9BQWdCO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNYLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQ25CLFVBQUMsTUFBZTtvQkFDWixLQUFLO2dCQUNULENBQUMsRUFDRCxjQUFPLENBQUMsQ0FDWCxDQUFDO1lBQ04sQ0FBQztRQUNMLENBQUMsRUFDRCxjQUFPLENBQUMsQ0FDWCxDQUFDO0lBQ04sQ0FBQztJQXpDUSxrQkFBa0I7UUFMOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1NBQzVDLENBQUM7O09BQ1csa0JBQWtCLENBMEM5QjtJQUFELHlCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYmx1ZXRvb3RoIGZyb20gJ25hdGl2ZXNjcmlwdC1ibHVldG9vdGgnO1xuaW1wb3J0ICogYXMgb2JzZXJ2YWJsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkJsdWV0b290aFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ibHVldG9vdGguY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBCbHVldG9vdGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHBlcmlwaGVyYWxzOiBPYnNlcnZhYmxlQXJyYXk8YW55PjtcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGVja0JsdWV0b290aEFuZE1ha2VJdEVuYWJsZWQoKTtcbiAgICAgICAgdGhpcy5wZXJpcGhlcmFscyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBibHVldG9vdGguc3RhcnRTY2FubmluZyh7XG4gICAgICAgICAgICBzZXJ2aWNlVVVJRHM6IFtdLCAvLyBwYXNzIGFuIGVtcHR5IGFycmF5IHRvIHNjYW4gZm9yIGFsbCBzZXJ2aWNlc1xuICAgICAgICAgICAgc2Vjb25kczogNCwgLy8gcGFzc2luZyBpbiBzZWNvbmRzIG1ha2VzIHRoZSBwbHVnaW4gc3RvcCBzY2FubmluZyBhZnRlciA8c2Vjb25kcz4gc2Vjb25kc1xuICAgICAgICAgICAgb25EaXNjb3ZlcmVkOiAocGVyaXBoZXJhbDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcGVyaXBoZXJhbHMucHVzaChvYnNlcnZhYmxlLmZyb21PYmplY3QocGVyaXBoZXJhbCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwZXJpcGhlcmFsJywgSlNPTi5zdHJpbmdpZnkocGVyaXBoZXJhbCkpO1xuICAgICAgICAgICAgICAgIHRoaXMucGVyaXBoZXJhbHMucHVzaChvYnNlcnZhYmxlLmZyb21PYmplY3QocGVyaXBoZXJhbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT24gZnVsZmlsbGVkJyk7XG4gICAgICAgIH0sIChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrQmx1ZXRvb3RoQW5kTWFrZUl0RW5hYmxlZCgpOiB2b2lkIHtcbiAgICAgICAgYmx1ZXRvb3RoLmlzQmx1ZXRvb3RoRW5hYmxlZCgpLnRoZW4oXG4gICAgICAgICAgICAoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFbmFibGVkPycsIGVuYWJsZWQpO1xuICAgICAgICAgICAgICAgIGlmICghZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBibHVldG9vdGguZW5hYmxlKCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIChhZ3JlZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAtLVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19