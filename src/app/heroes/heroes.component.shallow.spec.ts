import { NO_ERRORS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { of } from "rxjs";
import { HeroService } from "../hero.service";
import { HeroesComponent } from "./heroes.component"

describe('Hereos Component Shallow Integration Test', ()=>{
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
      declarations:[HeroesComponent],
      schemas: [NO_ERRORS_SCHEMA],
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

})
