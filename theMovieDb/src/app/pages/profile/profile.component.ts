import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  movie;

  constructor(
    private router: ActivatedRoute,
    private movieservice: MovieService
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      console.log("Get movie id", params);

      //get movie data from movie service
      this.movieservice.movie(params.id).subscribe(data => {
        console.log("get movie's details", data);

        this.movie = data;
      });
    });
  }
}
