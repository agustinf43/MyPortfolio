import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  conocimientos=[
    {
      tecnologia:"Angular",
      logourl:"https://img.icons8.com/?size=100&id=LrbUhI925NJj&format=png&color=FFFFFF",
      nivel:"Principiante"
    },{
      
      tecnologia:"Java",
      logourl:"https://img.icons8.com/?size=100&id=2572&format=png&color=FFFFFF",
      nivel:"Intermedio"

    },{
      
      tecnologia:"JavaScript",
      logourl:"https://img.icons8.com/?size=100&id=39853&format=png&color=FFFFFF",
      nivel:"Principiante"
    },{
      
      tecnologia:"HTML",
      logourl:"https://img.icons8.com/?size=100&id=1043&format=png&color=FFFFFF",
      nivel:"Avanzado"
    },{
      
      tecnologia:"CSS",
      logourl:"https://img.icons8.com/?size=100&id=1045&format=png&color=FFFFFF",
      nivel:"Avanzado"
    },{
      
      tecnologia:"GIT",
      logourl:"https://img.icons8.com/?size=100&id=38388&format=png&color=FFFFFF",
      nivel:"Intermedio"
    }
  ]

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
