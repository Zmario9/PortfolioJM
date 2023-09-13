import { Component } from '@angular/core';
import Typewriter from 't-writer.js';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  ngOnInit():void {
    const target = document.querySelector('#owner');
    const writeOwner1 = new Typewriter(target,{
      typeColor: 'red',
    })

    writeOwner1
    .type('Magus Developer')
    .start();
  }
}
