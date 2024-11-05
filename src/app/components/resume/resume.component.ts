import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConocimientosserviceService } from '../../servicios/conocimientosservice.service';
import { conocimientos } from '../../modelos/conocimientos';
import { proyectos } from '../../modelos/proyectos';
import { ProyectosService } from '../../servicios/proyectos.service';


@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {

    conocimientosAgustin:conocimientos[]=[];
    proyectosAgustin:proyectos[]=[];


   constructor(private svc: ConocimientosserviceService,
    private svcP: ProyectosService){}

  

   ngOnInit(): void {
    this.mostrarConocimientos();
    this.mostrarProyectos();
    
  }

  mostrarConocimientos(): void {
    this.svc.getConocimientos().subscribe({
      next: (data) => {
        this.conocimientosAgustin = data;
        console.log(JSON.stringify( this.conocimientosAgustin));
      },
      error: (error) => {
        console.error('Error al cargar la info', error);
      },
    });
  }


  mostrarProyectos(): void {
    this.svcP.getProyectos().subscribe({
      next: (data) => {
        this.proyectosAgustin = data;
        console.log(JSON.stringify( this.proyectosAgustin));
      },
      error: (error) => {
        console.error('Error al cargar la info', error);
      },
    });
  }




  idiomas=[
    {
      idioma:"Español",
      nivel:"Nativo"
    },{
      idioma:"Ingles",
      nivel:"Intermedio"
    }



  ]

}
