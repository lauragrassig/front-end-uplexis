import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  changeMenu() {
    const aplicativo = document.querySelector('#aplicativos');
    const fontes = document.querySelector('#fontes');

    if ( this.router.url == '/' ) {
      aplicativo.classList.contains('-active') && aplicativo.classList.remove('-active');
      !fontes.classList.contains('-active') && fontes.classList.add('-active');
    } else {
      !aplicativo.classList.contains('-active') && aplicativo.classList.add('-active');
      fontes.classList.contains('-active') && fontes.classList.remove('-active');
    }
  }
}
