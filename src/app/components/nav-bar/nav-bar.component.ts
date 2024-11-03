import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  itemsDelMenu=[
    {
      descripcion:"Home",
      href:"/Home"
      
    },
    {
      descripcion:"About",
      href:"/About"
      
    },
    {
      descripcion:"Resume",
      href:"/Resume"
    }


  ]


}
