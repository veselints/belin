import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  	<h2>My Heroes</h2>
  	<ul class="heroes">
  		<li [class.selected]="hero === selectedHero" *ngFor="let hero of heroes" (click)="onSelect(hero)">
		  	<span class="badge">{{hero.id}}</span> {{hero.name}}
  		</li>
  	</ul>
  	<my-hero-detail [hero]="selectedHero"></my-hero-detail>`,
  	providers: [HeroService]
})

export class AppComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  title: 'Belin web site';

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

