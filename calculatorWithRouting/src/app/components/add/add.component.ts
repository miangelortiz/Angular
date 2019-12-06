import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent implements OnInit {
  public total: number;
  public show: boolean = false;
  public showButton: boolean = true;
  constructor(public dataService: DataService) {
    this.total = dataService.number1 + dataService.number2;
  }

  ngOnInit() {}

  showBox() {
    this.show = true;
    this.showButton = false;
  }

  hideBox() {
    this.show = false;
    this.showButton = true;
  }
}
