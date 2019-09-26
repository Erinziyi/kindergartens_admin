import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component"; //1

const routes: Routes = [
  {
    path: "main",
    component: MainComponent //2
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
