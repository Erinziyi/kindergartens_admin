import { Injectable } from "@angular/core";
//1)Import
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ApiService {
  //2)Inject

  constructor(public httpClient: HttpClient) {}

  //3)Implement

  getKindergartens() {
    return this.httpClient.get(
      "https://api014-erin-erin.herokuapp.com/api/kindergartens"
    );
  }
}
