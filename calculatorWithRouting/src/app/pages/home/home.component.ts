import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public number1: number;
  public number2: number;

  constructor(public dataService: DataService) {
    this.number1 = dataService.number1;
    this.number2 = dataService.number2;
  }

  ngOnInit() {}

  add() {
    this.dataService.number1 = this.number1;
    this.dataService.number2 = this.number2;
  }
}
