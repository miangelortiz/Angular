import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  public total: number;
  constructor(public dataService: DataService) {
    this.total = dataService.number1 + dataService.number2;
  }

  ngOnInit() {}
}
