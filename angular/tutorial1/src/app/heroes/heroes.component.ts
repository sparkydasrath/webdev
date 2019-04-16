import { Component, OnInit } from '@angular/core';
import { Heroes } from '../mock-heroes'
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = Heroes;

  constructor() { }

  ngOnInit() {
    console.log("init")
  }

  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
