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
      //Debo reparar esto
      let descripcion: any;
      //let descripcion: string;
      console.log(evento.srcElement.src);
      console.log(ruta);
      // console.log(evento.srcElement.className.includes("btnKnows"));
      console.log("funciona");
      this.conocimientos.forEach(element => {
        if (evento.srcElement.alt === element.nombre){
          // console.log(`${evento.srcElement.alt} = ${element.nombre}`);
          descripcion = element.description;
          console.log(descripcion);
        }
      });
      this.modalRef = this.modalService.open(ModalComponent,{
        data :{
          //Ruta de donde se pide el modal para manejar el uso
          path: ruta,
          //Boton de origen
          originBtn: "btnKnows",
          //Ruta de la imagen de icono
          src: evento.srcElement.src,
          //Nombre de la imagen para referencia.
          name: evento.srcElement.alt,
          //Descripcion de los conocimientos obtenidos sobre esta rama
          desc: descripcion
        },
        // modalClass:"modal-dialog-scrollable"
      });
    }
  }
  conocimientos = [
    {
      nombre:'HTML5',
      src:"../../assets/img/html.png",
      description:[
        "Diseño de página web",
        "Manejo de frameworks",
        "Uso de preprocesadores",
        "Manejo de contenedores flexibles",
        "Uso de patrones de diseño web",
        "Maquetación",
        "Formularios",
        "Insertar audios y videos",
        "Listas y viñetas",
        "Modelo de caja",
        "Portafolios",
        "Posicionamiento de contenido",
        "Manejo de selectores"
      ]
    },
    {
      nombre:'JavaScript',
      src:'../../assets/img/javascript.png',
      description:[
        "Uso de NodeJS",
        "Manejo de variables",
        "Manejo de arreglos",
        "Manejo de objetos y manipular sus datos",
        "Manipulación del DOM",
        "Creacion de formularios interactivos",
        "Uso de ciclos para manejar datos de arreglos",
        "Programacion modular",
        "Documentacion",
        "Validacion de formularios",
        "Expresiones regulares",
        "Manejo de eventos",
        "Agregar elementos al dom",
        "Manejo de tablas",
        "Uso de JSON",
        "Programacion asincrona para manejo de peticiones HTTP",
        "Funciones constructoras",
        "Ejecucion automatica",
        "Manejo de fechas",
        "Uso de APIs",
        "Manejo de AJAX",
        "Fetch y promesas",
        "Uso de CANVAS"
      ]
    },
    {
      nombre:'CSS',
      src:'../../assets/img/css.png',
      description:[
        "Diseño responsivo con Bootstrap" ,
        "Flexbox",
        "Efectos especiales",
        "Transformacion de elementos",
        "Transiciones de efectos",
        "CSS media queries",
        "Estructuras de diseño responsive",
        "Uso de metodologias CSS",
        "Manejo de tipografías y texto",
        "Diseño responsive (verse bien en distintos dispositivos)",
        "Selectores avanzados"
      ]
    },
    {
      nombre:'BootStrap',
      src:'../../assets/img/bootstrap.png',
      description:[
        "Utilidades de texto y fondo",
        "Flexbox Bootstrap",
        "Grid Bootstrap",
        "Componentes de botones",
        "Formularios con Bootstrap",
        "Maquetado de paginas webs con Bootstrap",
        "Dropdowns",
        "Carousel",
        "Ventana Modal",
        "List groups",
        "Cartas, acordiones y collapse"
      ]
    },
    {
      nombre:'Github',
      src:'../../assets/img/github.png',
      description:[
        "Manejo de repositorios locales",
        "Commits",
        "Manejo de historial de confirmaciones",
        "Manipulacion correcta de archivos",
        "Manejo de ramas",
        "Deploy",
        "Operaciones con repositorios remotos",
        "Manejo de github"
      ]
    },
    {
      nombre:'Jquery',
      src:'../../assets/img/jquery.png',
      description:[
        "Manejo del DOM con Jquery",
        "Manipular el HTML con Jquery",
        "Manipular estilos",
        "Efectos con Jquery"
      ]
    },
    {
      nombre:'TypeScript',
      src:'../../assets/img/typescript.png',
      description:[
        "Interfaces",
        "Funciones con TS",
        "Modificaciones de Acceso",
        "Constructores",
        "Herencia",
        "Manejo de clases Abstractas",
        "Metodos y atributos estaticos",
        "Uso de Enums",
        "Uso de Modulos",
      ]
    },
    {
      nombre:'Ionic',
      src:'../../assets/img/ionic.png',
      description:[
        "Estructuracion del proyecto",
        "Estructura de las vistas",
        "Barra de herramientas",
        "Items",
        "Componentes de contenido",
        "Paginas y componentes",
        "Contenido dinamico",
        "Interacciones con el usuario",
        "navegacion",
        "Navs y modales",
        "Menu",
        "Captura de Datos",
        "Uso de slides de Ionic",
        "Uso de linterna en aplicaciones moviles",
        "Construccion del APK",
        "Configuracion de la APP",
        "Servicio de Camara",
        "Servicio de Google Maps",
        "Geolocalizacion",
        "Almacenamiento para camaras",
        "Manejo de la conexion del dispositivo"
      ]
    },
    {
      nombre:'Electron',
      src:'../../assets/img/electron.png',
      description:[
        "Webcontent",
        "Eventos y metodos de Electron",
        "Preloads",
        "Modelo de Procesos de Electron",
        "ipc-process Comunication",
        "Handles, Invokes",
        "Envio de Datos al Main",
        "Retornar valors al render",
        "Notificaciones",
        "Sistema de archivos",
        "Uso de Tray",
        "Empaquetado y distribucion de la app de escritorio"
      ]
    },
    {
      nombre:'Angular',
      src:'../../assets/img/angular.png',
      description:[
        "Patron MVC",
        "Componentes",
        "Librerias de estilo",
        "Estilos en Angular",
        "Data Binding",
        "Directivas incorporadas",
        "Eventos Two-way Binding",
        "Angular Material",
        "Uso de enrutado con Router",
        "Dist",
        "Modulos de Angular",
        "Formularios con Angular",
        "Formularios basados en plantillas",
        "Formularios reactivos",
        "Pipes",
        "Guards",
        "Services",
        "Http request",
        "Interceptors",
        "Eventos entre componentes"
      ]
    },
    {
      nombre:'NodeJS',
      src:'../../assets/img/nodejs.png',
      description:[
        "Descarga de paquetes",
        "Uso de librerias de NPM",
        "Manejo de versiones",
        "Creacion de proyectos JS",
      ]
    },
    {
      nombre:'Sass',
      src:'../../assets/img/sass.png',
      description:[
        "Anidamiento",
        "Importes y extensiones",
        "Manejo de variables",
        "Operadores",
        "Diretivas de control",
        "Mapas",
        "Mixins",
        "Funciones",
        "Depuracion"
      ]
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
