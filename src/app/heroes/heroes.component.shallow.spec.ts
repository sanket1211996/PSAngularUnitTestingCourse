import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component"

describe('Hereos Component Shallow Integration Test', ()=>{
  let fixture: ComponentFixture<HeroesComponent>;
  let HEROES;
  let mockHeroService

  // Faking child component
  @Component({
    selector: 'app-hero',
    template: '<div>Fake Hero<div>',
    //styleUrls:  ['./hero.component.css']
  })
 //Need to remove export tag since we are not exporting this class
  /*export*/ class FakeHeroComponent {
    @Input() hero: Hero;
  }

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
        FakeHeroComponent
      ],
      //schemas: [NO_ERRORS_SCHEMA],
      providers: [
        //long add technique for  service injection.
        {provide: HeroService , useValue: mockHeroService }
      ]
    })

    fixture = TestBed.createComponent(HeroesComponent);
  })

  it(' should populate heroes after getHeroes is called', ()=>{
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    expect(fixture.componentInstance.heroes.length).toEqual(3);
  })

  it(' should create one li element for each hero', ()=>{
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    let liElements = fixture.debugElement.queryAll(By.css('li'));
    expect(liElements.length).toEqual(3);
  })

})
