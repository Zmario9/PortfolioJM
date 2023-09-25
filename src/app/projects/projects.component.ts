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
  modalRef: MdbModalRef<ModalComponent> | null = null;
  projects = [
    {
      titulo: "Building a House",
      description:`
                    Uno de los primeros proyectos hechos con SCSS, un modelo de pagina web de construccion de 
                    casas que nos fue pedido en uno de los trabajos que he hecho tambien que pude confeccionar.
                  `,
      src: "assets/projectImgs/buildHouse.PNG"
    },
    {
      titulo: "Natural Foods",
      description:`
                    Otro modelo hecho enteramente con SCSS, un modelo de pagina web de comidas naturales que se 
                    me mando a maquetar.
                  `,
      src: "assets/projectImgs/naturalFoods.PNG"
    },
    {
      titulo: "Education Page",
      description:`
                    Modelo web de una pagina de educacion infantil hecho enteramente por SCSS
                  `,
      src: "assets/projectImgs/EducationPage2.PNG"
    },
    {
      titulo: "Prototipo tienda de ventas",
      description:`
                    Uno de los proyectos mas divertidos que hice con angular, un clon de mercadolibre donde
                    al seleccionar un producto se mostraban sus caracteristicas, precio y demas!
                  `,
      src: "assets/projectImgs/ClonePrototypeShop.PNG"
    },
    {
      titulo: "Agencia de Marketing",
      description:`
                    Modelo web de una pagina que provee informacion sobre servicios
                    relacionados con el Marketing Digital, uno de mis proyectos favoritos hechos enteramente
                    en CSS
                  `,
      src: "assets/projectImgs/AgentesWeb.PNG"
    },
    {
      titulo: "Portafolio simple responsive",
      description:`
                    Otro de mis proyectos favoritos, un portafolio responsive hecho enteramente en CSS.
                    Se puede ver en cualquier dispositivo
                  `,
      src: "assets/projectImgs/Portfolio1Template.PNG"
    },
    {
      titulo: "Modelo 2 de Portafolio responsive",
      description:`
                    Mi primer intento de hacer un portafolio responsive minimalista hecho con ciertas
                    imagenes customizadas que son mas que nada un placeholder que me resultaron agradables
                    de ver.
                  `,
      src:"assets/projectImgs/PortfolioTemplate3.PNG"
    }
  ]
  //Servicio de modal y ruta.
  constructor(private modalService: MdbModalService, private router: Router) {}


  openModalProjects(evento){
    console.log("a")
  }
}
