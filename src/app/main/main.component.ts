import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  modalRef: MdbModalRef<ModalComponent> | null = null;

  //Servicio de modal y ruta.
  constructor(private modalService: MdbModalService, private router: Router) {}

  openModalMain(evento) {
    //console.log(evento.srcElement);
    //console.log(this.router.config[1].path);
    
    //Saber si el boton al que se le dio click es el boton de las certificaciones.
    //console.log(evento.srcElement.className.includes("certsBtn")); 
    /*
      Verifico la ruta de origen del llamado de ese modal es HOME para evitar que posiblemente se ejecute en 
      otros componentes, y tambien verifico que en este caso sea el caso 1 de que el boton sea de las certificaciones.
      (Esto ultimo obtenido gracias al metodo de strings "includes").
    */
    //MODAL DE CERTIFICACIONES
    if(this.router.url === "/home" && evento.srcElement.className.includes("certsBtn")){
      //console.log(this.router.url);
      //Creo una variable que guarde la url del componente actual.
      const ruta = this.router.url;
      //Abro el modal en base a los datos recibidos en este componente.
      this.modalRef = this.modalService.open(ModalComponent,{
        data:{
          //Titulo del certificado
          title: this.certsCadif1[evento.srcElement.id-1].name,
          //Source de la imagen del certificado
          src: this.certsCadif1[evento.srcElement.id-1].source,
          //Color del fondo del modal
          bgColor: "bg-info", 
          //Color del texto del titulo
          titleColor: "text-light", 
          //Ruta de donde se pide el modal para manejar el uso
          path: ruta,
          //Boton de origen
          originBtn: "certsBtn"
        },
        //centra el modal
        modalClass: 'modal-dialog-centered modal-lg' 
      });
    }

    //MODAL DE CONOCIMIENTOS
    if (this.router.url === "/home" && evento.srcElement.className.includes("btnKnows")){
      const ruta = this.router.url;
      console.log(evento.srcElement.src);
      console.log(ruta);
      console.log(evento.srcElement.className.includes("btnKnows"));
      console.log("funciona");
      this.modalRef = this.modalService.open(ModalComponent,{
        data :{
          //Ruta de donde se pide el modal para manejar el uso
          path: ruta,
          //Boton de origen
          originBtn: "btnKnows",
          //Ruta de la imagen de icono
          srcImg: evento.srcElement.src
        }
      });
    }
  }
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
    name:'Programador',
    color:'btn-success',
    id:"1",
    source:"../../assets/img/fundamentos.jpg"
  },
  {
    name:'Desarrollador Front-End Junior',
    color:'btn-warning',
    id:"2",
    source:"../../assets/img/junior.jpg"
  },
  {
    name:'Desarrollador Front-End Master',
    color:'btn-danger',
    id: "3",
    source:"../../assets/img/master.jpg"
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
