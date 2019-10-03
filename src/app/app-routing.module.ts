import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component"; //1
import { LoginComponent } from "./login/login.component"; //1
import { EditKindergartenComponent } from "./edit-kindergarten/edit-kindergarten.component"; //1

const routes: Routes = [
  {
    path: "main",
    component: MainComponent //2
  },
  {
    path: "login",
    component: LoginComponent //2
  },
  {
    path: "edit/:id",
    component: EditKindergartenComponent //2
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
