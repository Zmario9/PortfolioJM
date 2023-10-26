import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortfolioJM';
  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit(){
    this.router.navigate(["/home"]);
  }
}
