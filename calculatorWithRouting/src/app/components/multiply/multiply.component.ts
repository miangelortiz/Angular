import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-multiply",
  templateUrl: "./multiply.component.html",
  styleUrls: ["./multiply.component.scss"]
})
export class MultiplyComponent implements OnInit {
  public total: number;
  constructor(public dataService: DataService) {
    this.total = dataService.number1 * dataService.number2;
  }

  ngOnInit() {}
}
