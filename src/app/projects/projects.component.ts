import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Router } from '@angular/router';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  [x: string]: any; //para poder aplicar variable de arreglos
  modalRef: MdbModalRef<ModalComponent> | null = null;
  projects = [
    {
      titulo: "Building a House",
      description:`
                    Uno de los primeros proyectos hechos con SCSS, un modelo de pagina web de construccion de 
                    casas que nos fue pedido en uno de los trabajos que he hecho tambien que pude confeccionar.
                  `,
      src: "assets/projectImgs/buildHouse.PNG",
      gifSrc:"assets/projectsGif/BuildingAHouse.gif"
    },
    {
      titulo: "Natural Foods",
      description:`
                    Otro modelo hecho enteramente con SCSS, un modelo de pagina web de comidas naturales que se 
                    me mando a maquetar.
                  `,
      src: "assets/projectImgs/naturalFoods.PNG",
      gifSrc:"assets/projectsGif/NaturalFoods.gif"
    },
    {
      titulo: "Education Page",
      description:`
                    Modelo web de una pagina de educacion infantil hecho enteramente por SCSS
                  `,
      src: "assets/projectImgs/EducationPage2.PNG",
      gifSrc:"assets/projectsGif/EducationBoring.gif"
    },
    {
      titulo: "Prototipo tienda de ventas",
      description:`
                    Uno de los proyectos mas divertidos que hice con angular, un clon de mercadolibre donde
                    al seleccionar un producto se mostraban sus caracteristicas, precio y demas!
                  `,
      src: "assets/projectImgs/ClonePrototypeShop.PNG",
      gifSrc:"assets/projectsGif/MercadoLibreClone.gif"
    },
    {
      titulo: "Agencia de Marketing",
      description:`
                    Modelo web de una pagina que provee informacion sobre servicios
                    relacionados con el Marketing Digital, uno de mis proyectos favoritos hechos enteramente
                    en CSS
                  `,
      src: "assets/projectImgs/AgentesWeb.PNG",
      gifSrc:"assets/projectsGif/AgenciaOK.gif"
    },
    {
      titulo: "Portafolio simple",
      description:`
                    Otro de mis proyectos favoritos, un portafolio responsive hecho enteramente en CSS.
                    Se puede ver en cualquier dispositivo
                  `,
      src: "assets/projectImgs/Portfolio1Template.PNG",
      gifSrc:"assets/projectsGif/PortfolioModel.gif"
    },
    {
      titulo: "Modelo 2 de Portafolio",
      description:`
                    Mi primer intento de hacer un portafolio responsive minimalista hecho con ciertas
                    imagenes customizadas que son mas que nada un placeholder que me resultaron agradables
                    de ver.
                  `,
      src:"assets/projectImgs/PortfolioTemplate3.PNG",
      gifSrc:"assets/projectsGif/PortfolioModel2.gif"
    }
  ];
  projectsGame = [
    {
      titulo: "Juego de memoria",
      description: `
                     Es el primer videojuego que hago usando html, css y en este caso angular con typescript.
                   `,
      src:"assets/projectImgs/MemoryCard.PNG",
      gifSrc:"assets/projectsGif/MemoryCard.gif"
    }
  ]
  //Servicio de modal y ruta.
  constructor(private modalService: MdbModalService, private router: Router) {}

  ngOnInit(){
    scrollHorizontal(".contextFlex");
  }

  openModalProjects(evento: any, array: any){
    const eventAlt = evento.srcElement.id;
    const ruta = this.router.url;
    let titleProject: any;
    let projectGif: any;
    array.forEach((element:any)=>{
      if (element.titulo === eventAlt){
        titleProject = eventAlt;
        projectGif = element.gifSrc;
      }
    });
    // console.log(titleProject);
    this.modalRef = this.modalService.open(ModalComponent,{
      data:{
        path: ruta,
        name: titleProject,
        gif: projectGif
      },
      //centra el modal
      modalClass: 'modal-dialog-centered modal-lg'
    });
  }
}

//FUNCIONES
function scrollHorizontal(element){
  const scrollable:any = document.querySelector(element);
  console.log("proyecto cargado");
  scrollable?.addEventListener("wheel",function(e){
    // console.log(e + "funcionaaaa");
    e.preventDefault();
    // scrollable.scrollLeft += e.deltaY;
    if(e.wheelDelta>0){
      return scrollable.scrollLeft -= 50;
    } else {
      return scrollable.scrollLeft += 50;
    }
  });
}
