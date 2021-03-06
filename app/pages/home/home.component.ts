import { Component, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular';
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    /* ***********************************************************
    * Use the @ViewChild decorator to get a reference to the drawer component.
    * It is used in the "onDrawerButtonTap" function below to manipulate the drawer.
    *************************************************************/
    @ViewChild("drawer") drawerComponent: RadSideDrawerComponent;

    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private routerExtensions: RouterExtensions) {}
    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    /* ***********************************************************
    * According to guidelines, if you have a drawer on your page, you should always
    * have a button that opens it. Use the showDrawer() function to open the app drawer section.
    *************************************************************/
    onDrawerButtonTap(): void {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    onNewShipmentButtonTap(): void {
        this.routerExtensions.navigate(['new-shipment'], {
            transition: {
                name: 'fade'
            }
        });
    }

    onBluetoothButtonTap(): void {
        console.log('start with bluetooth');
        this.routerExtensions.navigate(['bluetooth'], {
            transition: {
                name: 'fade'
            }
        });
    }
}
