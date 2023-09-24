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
    }
  ]
  //Servicio de modal y ruta.
  constructor(private modalService: MdbModalService, private router: Router) {}


  openModalProjects(evento){
    console.log("a")
  }
}
