import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable() // Dont forgot the parentheses. omitting them leads to an error difficult to diagnose

export class HeroService {    
    // getheroes method stub

    getHeroes(): Promise<Hero[]> { 
        return Promise.resolve(HEROES);
    }
}