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
  public totalAdd: number = 0;
  public totalSubtract: number = 0;
  public totalMultiply: number = 0;
  public totalDivide: number = 0;

  constructor(public dataService: DataService) {
    this.number1 = dataService.number1;
    this.number2 = dataService.number2;
  }

  ngOnInit() {}

  changeInput() {
    if (this.number1 == null) {
      this.number1 = 0;
    } else if (this.number2 == null) {
      this.number2 = 0;
    }
    this.totalAdd = this.number1 + this.number2;
    this.totalSubtract = this.number1 - this.number2;
    this.totalMultiply = this.number1 * this.number2;
    this.totalDivide = this.number1 / this.number2;

    this.dataService.number1 = this.number1;
    this.dataService.number2 = this.number2;
  }
}
