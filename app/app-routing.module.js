"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
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
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUd2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsa0NBQWtDLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxxQ0FBcUMsRUFBRTtJQUN2RSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHFDQUFxQyxFQUFFO0lBQ3JFLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsNERBQTRELEVBQUU7SUFFcEcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSwyQ0FBMkMsRUFBRTtJQUM3RSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLDJDQUEyQyxFQUFFO0lBQzdFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsaURBQWlELEVBQUU7SUFDckYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxpREFBaUQsRUFBRTtDQUN4RixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge05ld1NoaXBtZW50TW9kdWxlfSBmcm9tICcuL3BhZ2VzL25ldy1zaGlwbWVudC9uZXctc2hpcG1lbnQubW9kdWxlJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXHJcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgbG9hZENoaWxkcmVuOiBcIi4vbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aDogXCJzaWdudXBcIiwgbG9hZENoaWxkcmVuOiBcIi4vc2lnbnVwL3NpZ251cC5tb2R1bGUjU2lnbnVwTW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6IFwibmV3LXNoaXBtZW50XCIsIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL25ldy1zaGlwbWVudC9uZXctc2hpcG1lbnQubW9kdWxlI05ld1NoaXBtZW50TW9kdWxlXCIgfSxcclxuXHJcbiAgICB7IHBhdGg6IFwiYnJvd3NlXCIsIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL2Jyb3dzZS9icm93c2UubW9kdWxlI0Jyb3dzZU1vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6IFwic2VhcmNoXCIsIGxvYWRDaGlsZHJlbjogXCIuL3BhZ2VzL3NlYXJjaC9zZWFyY2gubW9kdWxlI1NlYXJjaE1vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6IFwiZmVhdHVyZWRcIiwgbG9hZENoaWxkcmVuOiBcIi4vcGFnZXMvZmVhdHVyZWQvZmVhdHVyZWQubW9kdWxlI0ZlYXR1cmVkTW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aDogXCJzZXR0aW5nc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUjU2V0dGluZ3NNb2R1bGVcIiB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==