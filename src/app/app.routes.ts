import { Routes } from '@angular/router';


export const routes: Routes = [




    {
        path:'Home',
        loadComponent:() => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {
      path:'About',
      loadComponent:() => import('./components/about/about.component').then(m =>m.AboutComponent)

    },{
      path:'Resume',
      loadComponent:() => import('./components/resume/resume.component').then(m =>m.ResumeComponent)

    },{
      path:'**',
      loadComponent:() => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    
    
  


];
