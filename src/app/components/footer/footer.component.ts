import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  desarolladorNombre:string="Agustin Fernández"



  redes=[
    {
      red:"GitHub",
      link:"https://img.icons8.com/?size=100&id=12599&format=png&color=000000",
      alt:"GitHub",
      redEnlace:"https://github.com/agustinf43"
    },
    {
      red:"Facebook",
      link:"https://img.icons8.com/?size=100&id=118491&format=png&color=000000",
      alt:"Facebook",
      redEnlace:""
      
    },
    {
      red:"Instagram",
      link:"https://img.icons8.com/?size=100&id=59813&format=png&color=000000",
      alt:"Instagram",
      redEnlace:""
    
    },
    {
      red:"X",
      link:"https://img.icons8.com/?size=100&id=111057&format=png&color=000000",
      alt:"X",
      redEnlace:""
    
    },


  ]

  

}
