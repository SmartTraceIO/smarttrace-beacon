import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "login", loadChildren: "./login/login.module#LoginModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    isLoading: boolean = false;
    email: string;
    password: string;

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onSigninButtonTap(): void {
        const email = this.email;
        const password = this.password;

        this.isLoading = true;

        this.router.navigate(['/home']);
    }

    onSignupButtonTap(): void {
        this.router.navigate(['/signup']);
    }

    onForgotPasswordTap(): void {
        /* ***********************************************************
        * Call your Forgot Password logic here.
        *************************************************************/
    }
}
