import { Component } from '@angular/core';


@Component({
  selector: 'my-app', 
  template: `
   <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/employee">Employes</a>
   </nav>
   <router-outlet></router-outlet>
     `
})
export class AppComponent {
  title = 'TTC (Task Tool Control)';  
}