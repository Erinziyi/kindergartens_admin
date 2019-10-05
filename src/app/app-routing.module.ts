import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component"; //1
import { LoginComponent } from "./login/login.component"; //1
import { EditKindergartenComponent } from "./edit-kindergarten/edit-kindergarten.component"; //1
import { AuthGuardGuard } from "./auth-guard.guard"; //2

const routes: Routes = [
  {
    path: "main",
    component: MainComponent, //2
    canActivate: [AuthGuardGuard] //3 protecte link
  },
  {
    path: "login",
    component: LoginComponent //2
  },
  {
    path: "edit/:id",
    component: EditKindergartenComponent,
    canActivate: [AuthGuardGuard] //2
  },
  {
    path: "**",
    component: LoginComponent
    //3 404 back to login
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
