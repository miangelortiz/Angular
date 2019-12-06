import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.scss']
})
export class SubtractComponent implements OnInit {
  public total:number;
  constructor(public dataService: DataService) { 
    this.total = dataService.number1 - dataService.number2;
  }

  ngOnInit() {
  }

}
