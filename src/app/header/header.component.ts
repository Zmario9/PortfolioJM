import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from "@angular/common";
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private route: Router,private scroller: ViewportScroller ){}
  goTo(event){
    // event.preventDefault();
    // console.log("funciona");
    // console.log(event);
    // console.log(event.srcElement.innerText);
    switch(event.srcElement.innerText){
      case "inicio":  this.route.navigateByUrl('/home'); break;  //si se quiere ir a home, esta es la forma
      case "proyectos":  this.route.navigateByUrl('/projects'); break;
    }
    setTimeout(()=>{
      this.scroller.scrollToPosition([0,0]);
    },100);
  }
  goToContacts() {
    this.route.navigateByUrl('/home');
    setTimeout(()=>{
      this.scroller.scrollToAnchor("contacts");
    },100);
  }
}
