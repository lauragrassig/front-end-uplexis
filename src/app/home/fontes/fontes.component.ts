import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fontes',
  templateUrl: './fontes.component.html',
  styleUrls: ['./fontes.component.scss']
})
export class FontesComponent implements OnInit, AfterViewInit {
  apiFonte = [{
    title: "Profissional",
    description: "",
    icon: 'fas fa-globe',
    type: "profissional",
    price: "29,00"
  }, {
    title: "Reguladores",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-briefcase',
    type: "reguladores",
    price: "40,00"
  }, {
    title: "Sócio Ambiental",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-tree',
    type: "ambiental",
    price: "40,00"
  }, {
    title: "Jurídico",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-gavel',
    type: "juridico",
    price: "40,00"
  }, {
    title: "Listas Restritivas",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-ban',
    type: "restrititivas",
    price: "30,00"
  }, {
    title: "Mídia/Internet",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-globe-americas',
    type: "midia",
    price: "40,00"
  }, {
    title: "Bens e Imóveis",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-gem',
    type: "imoveis",
    price: "50,00"
  }, {
    title: "Cadastro",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-male',
    type: "cadastro",
    price: "40,00"
  }, {
    title: "Financeiro",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-piggy-bank',
    type: "financeiro",
    price: "100,00"
  }]

  constructor(private router:Router) {

  }

  ngAfterViewInit() {
    this.setMenuTab();
  }

  ngOnInit() {
  }

  selectOption(e) {
    const selected = e.currentTarget.attributes.getNamedItem('data-eventtype').value;
    const cardList : NodeListOf<HTMLElement> = document.querySelectorAll('.card');
    const addClassActive = e.currentTarget;

   this.clearTab();
   addClassActive.classList.add('-active');

   this.showOptionAll(cardList);
   selected != "profissional" ? this.hideNotOption(selected, cardList) : null;
   
  }

  hideNotOption(value, cardList) {
    cardList.forEach(card => {
      if ( card.attributes.getNamedItem('data-eventtype').value != value) {
        !card.classList.contains('-inactive') && card.classList.add('-inactive');
      }
    });
  }

  showOptionAll(cardList) {
    cardList.forEach(card => {
      card.classList.contains('-inactive') && card.classList.remove('-inactive');
    })
  }

  clearTab() {
    const listFonts : NodeListOf<HTMLElement> = document.querySelectorAll('.fonte');
    listFonts.forEach(element => {
      element.classList.contains('-active') && element.classList.remove('-active');
    })
  }

  setMenuTab() {
    const listFonts : HTMLElement = document.querySelector('#testes');

    !listFonts.classList.contains('-active') && listFonts.classList.add('-active');
  }

  openSaibaMais(i) {
    localStorage.setItem('currentFonte', JSON.stringify(this.apiFonte[i]));

    this.router.navigate(['/saiba-mais']);
  }
}
