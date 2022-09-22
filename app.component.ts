import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
 toggleNav(nav: any){
  if (nav.opened)
  {nav.close()}
  else{nav.open();
  }
 }
}
