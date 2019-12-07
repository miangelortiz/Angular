import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  @Input() movie;
  @Output() message = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.movie);
  }

  emitToMyFather() {
    //Emit the message to father
    this.message.emit(`Movie page ${this.movie.id} emited`);

    //page's details navigation
    this.router.navigate(["profile", this.movie.id]);
  }
}
