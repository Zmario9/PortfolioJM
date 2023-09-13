import { Component } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  conocimientos = [
    {
      nombre:'HTML5',
      src:"../../assets/img/html.png"
    },
    {
      nombre:'JavaScript',
      src:'../../assets/img/javascript.png'
    },
    {
      nombre:'CSS',
      src:'../../assets/img/css.png'
    },
    {
      nombre:'BootStrap',
      src:'../../assets/img/bootstrap.png'
    },
    {
      nombre:'Github',
      src:'../../assets/img/github.png'
    },
    {
      nombre:'Jquery',
      src:'../../assets/img/jquery.png'
    },
    {
      nombre:'name',
      src:'../../assets/img/typescript.png'
    },
    {
      nombre:'Ionic',
      src:'../../assets/img/ionic.png'
    },
    {
      nombre:'Electron',
      src:'../../assets/img/electron.png'
    },
    {
      nombre:'Angular',
      src:'../../assets/img/angular.png'
    },
    {
      nombre:'NodeJS',
      src:'../../assets/img/nodejs.png'
    },
    {
      nombre:'Sass',
      src:'../../assets/img/sass.png'
    }
  ];
certsCadif1 =[
  {
    name:'Programador Junior',
    color:'btn-success'
  },
  {
    name:'Programador Front-End Junior',
    color:'btn-warning'
  },
  {
    name:'Programador Front-End Master',
    color:'btn-danger'
  }
];

  ngOnInit(): void {
    const target = document.querySelector("#animatedText1");
    const writer1 = new Typewriter(target, {
      //loop: true,
      typeColor: 'aquamarine',
      waitUntilVisible: true
    });
    const writer2 = new Typewriter(target, { 
      typeSpeed: 60,
      loop: true 
    })
    

  writer1
  .type('Soy un desarrollador web ')
  .removeCursor()
  .then(writer2.start.bind(writer2))
  .start();

  writer2
  .changeTypeColor('purple')
  .type("FrontEnd")
  .rest(2000)
  .clear()
  .changeTypeColor('aqua')
  .type("BackEnd")
  .rest(2000)
  .clear()
  .changeTypeColor('yellow')
  .type("Fullstack")
  .rest(4000)
  .clear();
  }
}
