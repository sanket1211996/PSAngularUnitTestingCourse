import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroComponent } from "../hero/hero.component";
import { HeroesComponent } from "./heroes.component"

describe('Hereos Component (Deep Integration Test) ', ()=>{
  let fixture: ComponentFixture<HeroesComponent>;
  let HEROES;
  let mockHeroService

  beforeEach(()=>{

    HEROES = [
      {id:1, name:'SpiderDude', strength:8},
      {id:2, name:'Wonderful Women', strength:24},
      {id:3, name:'SuperDude', strength:55}
    ]

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

    TestBed.configureTestingModule({
      declarations:[
        HeroesComponent,
        HeroComponent
      ],

      schemas: [NO_ERRORS_SCHEMA],

      providers: [
        //long add technique for  service injection.
        {provide: HeroService , useValue: mockHeroService }
      ]
    })

    fixture = TestBed.createComponent(HeroesComponent);

  })

  it(' should populate one hero component for each hero', ()=>{
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));

    for(let i = 0; i< heroComponentDEs.length; i++) {
      expect(heroComponentDEs[i].componentInstance.hero.name).toBe(HEROES[i].name)
    }

  })

})
