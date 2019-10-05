import { Injectable } from "@angular/core";
//1)Import
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  login(data) {
    return this.httpClient.post(
      "https://api014-erin-erin.herokuapp.com/api/login",
      data
    );
  }

  addKindergarten(data) {
    let httpHeaders = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer" + localStorage.getItem("token")
      )
    };
    return this.httpClient.post(
      "https://api014-erin-erin.herokuapp.com/api/kindergartens",
      data,
      httpHeaders
    );
  }

  getKindergatenById(id) {
    return this.httpClient.get(
      "https://api014-erin-erin.herokuapp.com/api/kindergartens/" + id
    );
  }

  editKindergatenById(id, data) {
    let httpHeaders = {
      headers: new HttpHeaders().set(
        "Authorization",
        "Bearer" + localStorage.getItem("token")
      )
    };
    return this.httpClient.post(
      "https://api014-erin-erin.herokuapp.com/api/kindergartens/" + id,
      data,
      httpHeaders
    );
  }
}
