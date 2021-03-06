﻿
/* you will no longer receive hero ina parent component property
binding. the new component should take "id" parameter from the params
observable in the activatedRoute service and use the heroSerivice to fetch
the hero with that id */

// keep the inpur import for now will remove it later
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from './hero.service';

import { Hero } from './hero';
// importing switchMap

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls:['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
    
     hero: Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    save(): void {
        this.heroService.update(this.hero)
            .then(()=>this.goBack());
    }
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }
    goBack(): void {
        this.location.back();
    }


}