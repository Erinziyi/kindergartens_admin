import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service"; //5

@Component({
  selector: "app-edit-kindergarten",
  templateUrl: "./edit-kindergarten.component.html",
  styleUrls: ["./edit-kindergarten.component.css"]
})
export class EditKindergartenComponent implements OnInit {
  editData = {
    name: "",
    description: "",
    email: "",
    phone: "",
    url: "",
    opening_hours: "",
    image_url: "",
    latitutude: "",
    longitude: ""
  };
  id;
  success = false;
  isLoading = false;
  constructor(
    public activatedRouted: ActivatedRoute,
    public apiService: ApiService
  ) {}

  ngOnInit() {
    this.id = this.activatedRouted.snapshot.params["id"];
    console.log(this.id);
    this.apiService.getKindergatenById(this.id).subscribe(resp => {
      console.log(resp);
      this.editData = resp["data"];
    });
  }

  editKindergarten() {
    this.isLoading = true;
    this.apiService
      .editKindergatenById(this.id, this.editData)
      .subscribe(resp => {
        console.log(resp);
        this.isLoading = false;
        if (resp["message"] == "Kindergaten succesfully updated!") {
          this.success = true;
        }
      });
  }
}
