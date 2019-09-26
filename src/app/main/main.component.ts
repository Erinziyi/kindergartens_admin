import { Component, OnInit } from "@angular/core";

//1) Import
import { ApiService } from "../api.service";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  kindergartens;
  //2) Inject
  constructor(public apiService: ApiService) {}

  ngOnInit() {
    //3) Implement

    this.apiService.getKindergartens().subscribe(resp => {
      console.log(resp);
      this.kindergartens = resp["data"];
    });
  }
}
