import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service"; //5
import { Router } from "@angular/router"; //6

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  data = {
    email: "",
    password: ""
  };

  constructor(public apiService: ApiService, public router: Router) {}

  ngOnInit() {}

  submitPressed() {
    this.apiService.login(this.data).subscribe(resp => {
      console.log(resp);
      if (resp["success"] == true) {
        // this.router.navigate(["/main"]);
        let token = resp["token"].split(" ")[1];
        console.log(token);
        localStorage.setItem("token", token); // save token
        window.location.href = "/main";
      }
    });
  }
}
