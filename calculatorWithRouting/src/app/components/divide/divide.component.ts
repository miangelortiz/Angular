import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-divide",
  templateUrl: "./divide.component.html",
  styleUrls: ["./divide.component.scss"]
})
export class DivideComponent implements OnInit {
  public total: number;
  constructor(public dataService: DataService) {
    this.total = dataService.number1 / dataService.number2;
  }

  ngOnInit() {}
}
