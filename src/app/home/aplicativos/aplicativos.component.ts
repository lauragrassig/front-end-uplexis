import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aplicativos',
  templateUrl: './aplicativos.component.html',
  styleUrls: ['./aplicativos.component.scss']
})
export class AplicativosComponent implements OnInit {
  apiCard = [{
    title: "Balanço Patrimonial",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'far fa-money-bill-alt',
    type: "preco",
    price: "29,00"
  }, {
    title: "Enriquecimenro de Dados",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-coins',
    type: "lancamento",
    price: "40,00"
  }, {
    title: "upLink",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-share-alt',
    type: "lancamento",
    price: "40,00"
  }, {
    title: "Validador de RG",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'far fa-check-square',
    type: "lancamento",
    price: "40,00"
  }, {
    title: "Veículo",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-car',
    type: "lancamento",
    price: "40,00"
  }, {
    title: "Comparador Societário",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-network-wired',
    type: "preco",
    price: "29,00"
  }, {
    title: "Diários Oficiais",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-search',
    type: "preco",
    price: "29,00"
  }, {
    title: "Dossiês",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'far fa-file',
    type: "preco",
    price: "29,00"
  }, {
    title: "Ficha Cadastral",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-address-card',
    type: "preco",
    price: "29,00"
  }, {
    title: "Históricop Empresarial",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-user-secret',
    type: "preco",
    price: "29,00"
  }, {
    title: "upMap",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-map-marker-alt',
    type: "preco",
    price: "29,00"
  }, {
    title: "upMatch",
    description: "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
    icon: 'fas fa-bullseye',
    type: "preco",
    price: "29,00"
  }];

  constructor(private router:Router) { }
  
  ngOnInit() {
  }

  selectFilter(e) {
    const selected = e.currentTarget.value;
    const cardList : NodeListOf<HTMLElement> = document.querySelectorAll('.card');

   this.showSelectAll(cardList);
   selected != "todos" ? this.displayOnly(selected, cardList) : null;
  }

  displayOnly(value, cardList) {
    cardList.forEach(card => {
      if ( card.attributes.getNamedItem('data-eventtype').value != value) {
        !card.classList.contains('-inactive') && card.classList.add('-inactive');
      }
    });
  }

  showSelectAll(cardList) {
    cardList.forEach(card => {
      card.classList.contains('-inactive') && card.classList.remove('-inactive');
    })
  }

  openSaibaMais(i) {
    localStorage.setItem('currentFonte', JSON.stringify(this.apiCard[i]));

    this.router.navigate(['/saiba-mais']);
  }
}
