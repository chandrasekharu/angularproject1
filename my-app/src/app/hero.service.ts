import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable() // Dont forgot the parentheses. omitting them leads to an error difficult to diagnose

export class HeroService {
    // getheroes method stub

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
                   .then(heroes => heroes.find(hero => hero.id === id));
    }
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise <Hero[]> {
        return new Promise(resolve => {
            //simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });

    }
}