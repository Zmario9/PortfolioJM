import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private route: Router){}
  ngOnInit():void {
    const target = document.querySelector('#owner');
    const writeOwner1 = new Typewriter(target,{
      typeColor: 'red',
    })

    writeOwner1
    .type('Magus Developer')
    .start();
  }

  goTo(event){
    event.preventDefault();
    // console.log("funciona");
    // console.log(event);
    console.log(event.srcElement.innerText);
    switch(event.srcElement.innerText){
      case "inicio": console.log(`ir a ${event.srcElement.innerText}`); this.route.navigateByUrl('/home'); break;  //si se quiere ir a home, esta es la forma
      case "proyectos": console.log(`ir a ${event.srcElement.innerText}`); this.route.navigateByUrl('/projects'); break;
    }
  }
}
