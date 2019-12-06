import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Import components
import { HomeComponent } from "./pages/home/home.component";
import { AddComponent } from "./components/add/add.component";
import { SubtractComponent } from "./components/subtract/subtract.component";
import { MultiplyComponent } from "./components/multiply/multiply.component";
import { DivideComponent } from "./components/divide/divide.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "add", component: AddComponent },
  { path: "subtract", component: SubtractComponent },
  { path: "multiply", component: MultiplyComponent },
  { path: "divide", component: DivideComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
