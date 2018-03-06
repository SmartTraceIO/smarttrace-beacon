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
        this.isLoading = true;
        this.peripherals = new observable_array_1.ObservableArray();
        bluetooth.startScanning({
            serviceUUIDs: [],
            seconds: 20,
            onDiscovered: function (peripheral) {
                // peripherals.push(observable.fromObject(peripheral));
                console.log('peripheral', JSON.stringify(peripheral));
                _this.peripherals.push(observable.fromObject(peripheral));
                console.log('Size: ', _this.peripherals.length);
            }
        }).then(function () {
            _this.isLoading = false;
            console.log('On fulfilled');
            _this.startReadingData();
        }, function (err) {
            console.log('error', err);
        });
    };
    BluetoothComponent.prototype.ngAfterViewInit = function () {
    };
    BluetoothComponent.prototype.startReadingData = function () {
        this.peripherals.forEach(function (peri, i, _a) {
            bluetooth.connect({
                UUID: peri.UUID,
                onConnected: function (data) {
                    console.log('Peripheral: ', data);
                },
                onDisconnected: function (data) { }
            }).then(function () { }, function () { });
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
            selector: "bluetooth",
            moduleId: module.id,
            templateUrl: "./bluetooth.component.html",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], BluetoothComponent);
    return BluetoothComponent;
}());
exports.BluetoothComponent = BluetoothComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1ZXRvb3RoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJsdWV0b290aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEY7QUFFMUYsa0RBQW9EO0FBQ3BELDZEQUErRDtBQUMvRCwyRUFBeUU7QUFRekU7SUFLSTtJQUFlLENBQUM7SUFFaEIscUNBQVEsR0FBUjtRQUFBLGlCQXNCQztRQXJCRyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksa0NBQWUsRUFBTyxDQUFDO1FBQzlDLFNBQVMsQ0FBQyxhQUFhLENBQUM7WUFDcEIsWUFBWSxFQUFFLEVBQUU7WUFDaEIsT0FBTyxFQUFFLEVBQUU7WUFDWCxZQUFZLEVBQUUsVUFBQyxVQUFlO2dCQUMxQix1REFBdUQ7Z0JBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUV6RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELENBQUM7U0FDSixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUU1QixLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDLEVBQUUsVUFBQyxHQUFHO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNENBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCw2Q0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxTQUFTLENBQUMsT0FBTyxDQUFDO2dCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixXQUFXLEVBQUUsVUFBQyxJQUFnQjtvQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLENBQUM7Z0JBQ0QsY0FBYyxFQUFFLFVBQUMsSUFBZ0IsSUFBTSxDQUFDO2FBQzNDLENBQUMsQ0FBQyxJQUFJLENBQ0gsY0FBTyxDQUFDLEVBQ1IsY0FBTyxDQUFDLENBQ1gsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJEQUE4QixHQUE5QjtRQUNJLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FDL0IsVUFBQyxPQUFnQjtZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDWCxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUNuQixVQUFDLE1BQWU7b0JBQ1osS0FBSztnQkFDVCxDQUFDLEVBQ0QsY0FBTyxDQUFDLENBQ1gsQ0FBQztZQUNOLENBQUM7UUFDTCxDQUFDLEVBQ0QsY0FBTyxDQUFDLENBQ1gsQ0FBQztJQUNOLENBQUM7SUFqRVEsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNsRCxDQUFDOztPQUNXLGtCQUFrQixDQWtFOUI7SUFBRCx5QkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQZXJpcGhlcmFsfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJsdWV0b290aFwiO1xuaW1wb3J0ICogYXMgYmx1ZXRvb3RoIGZyb20gJ25hdGl2ZXNjcmlwdC1ibHVldG9vdGgnO1xuaW1wb3J0ICogYXMgb2JzZXJ2YWJsZSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImJsdWV0b290aFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ibHVldG9vdGguY29tcG9uZW50Lmh0bWxcIixcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBCbHVldG9vdGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gICAgcGVyaXBoZXJhbHM6IE9ic2VydmFibGVBcnJheTxhbnk+O1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoZWNrQmx1ZXRvb3RoQW5kTWFrZUl0RW5hYmxlZCgpO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucGVyaXBoZXJhbHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PGFueT4oKTtcbiAgICAgICAgYmx1ZXRvb3RoLnN0YXJ0U2Nhbm5pbmcoe1xuICAgICAgICAgICAgc2VydmljZVVVSURzOiBbXSwgLy8gcGFzcyBhbiBlbXB0eSBhcnJheSB0byBzY2FuIGZvciBhbGwgc2VydmljZXNcbiAgICAgICAgICAgIHNlY29uZHM6IDIwLCAvLyBwYXNzaW5nIGluIHNlY29uZHMgbWFrZXMgdGhlIHBsdWdpbiBzdG9wIHNjYW5uaW5nIGFmdGVyIDxzZWNvbmRzPiBzZWNvbmRzXG4gICAgICAgICAgICBvbkRpc2NvdmVyZWQ6IChwZXJpcGhlcmFsOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBwZXJpcGhlcmFscy5wdXNoKG9ic2VydmFibGUuZnJvbU9iamVjdChwZXJpcGhlcmFsKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BlcmlwaGVyYWwnLCBKU09OLnN0cmluZ2lmeShwZXJpcGhlcmFsKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJpcGhlcmFscy5wdXNoKG9ic2VydmFibGUuZnJvbU9iamVjdChwZXJpcGhlcmFsKSk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2l6ZTogJywgdGhpcy5wZXJpcGhlcmFscy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT24gZnVsZmlsbGVkJyk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnRSZWFkaW5nRGF0YSgpO1xuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBzdGFydFJlYWRpbmdEYXRhKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBlcmlwaGVyYWxzLmZvckVhY2goKHBlcmksIGksIFtdKSA9PiB7XG4gICAgICAgICAgICBibHVldG9vdGguY29ubmVjdCh7XG4gICAgICAgICAgICAgICAgVVVJRDogcGVyaS5VVUlELFxuICAgICAgICAgICAgICAgIG9uQ29ubmVjdGVkOiAoZGF0YTogUGVyaXBoZXJhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGVyaXBoZXJhbDogJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkRpc2Nvbm5lY3RlZDogKGRhdGE6IFBlcmlwaGVyYWwpID0+IHt9XG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgICgpID0+IHt9LFxuICAgICAgICAgICAgICAgICgpID0+IHt9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVja0JsdWV0b290aEFuZE1ha2VJdEVuYWJsZWQoKTogdm9pZCB7XG4gICAgICAgIGJsdWV0b290aC5pc0JsdWV0b290aEVuYWJsZWQoKS50aGVuKFxuICAgICAgICAgICAgKGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW5hYmxlZD8nLCBlbmFibGVkKTtcbiAgICAgICAgICAgICAgICBpZiAoIWVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYmx1ZXRvb3RoLmVuYWJsZSgpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoYWdyZWVkOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLS1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==