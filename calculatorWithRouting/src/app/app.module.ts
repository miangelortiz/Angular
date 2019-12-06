import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddComponent } from './components/add/add.component';
import { SubtractComponent } from './components/subtract/subtract.component';
import { MultiplyComponent } from './components/multiply/multiply.component';
import { DivideComponent } from './components/divide/divide.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddComponent,
    SubtractComponent,
    MultiplyComponent,
    DivideComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
