import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saiba-mais',
  templateUrl: './saiba-mais.component.html',
  styleUrls: ['./saiba-mais.component.scss']
})
export class SaibaMaisComponent implements OnInit {
  currentFonte;
  currentCard;
  
  constructor() { }

  ngOnInit() {
    this.currentFonte = JSON.parse(localStorage.getItem('currentFonte'));

    this.currentCard = JSON.parse(localStorage.getItem('currentCard'));
  }

  
}
