import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {NewShipmentModule} from './pages/new-shipment/new-shipment.module';

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "signup", loadChildren: "./signup/signup.module#SignupModule" },
    { path: "home", loadChildren: "./pages/home/home.module#HomeModule" },
    { path: "new-shipment", loadChildren: "./pages/new-shipment/new-shipment.module#NewShipmentModule" },

    { path: "browse", loadChildren: "./pages/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "./pages/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "./pages/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "./pages/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
