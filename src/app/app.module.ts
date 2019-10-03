import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms"; //4 ng model need import form
import { LoginComponent } from "./login/login.component";
import { EditKindergartenComponent } from './edit-kindergarten/edit-kindergarten.component'; //3

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    EditKindergartenComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule], //3
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
