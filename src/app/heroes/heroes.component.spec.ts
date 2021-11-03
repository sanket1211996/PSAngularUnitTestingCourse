import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component"

describe('Heroes Component', ()=>{

  let component: HeroesComponent
  let HEROES;
  let mockHeroService

  beforeEach(()=>{
    HEROES = [
      {id:1, name:'SpiderDude', strength:8},
      {id:2, name:'Wonderful Women', strength:24},
      {id:3, name:'SuperDude', strength:55}
    ]

    //Mocking Hero Service to pass it heroes component
      mockHeroService = jasmine.createSpyObj([
      'getHeroes',
      'addHero',
      'deleteHero'
    ])

    component =  new HeroesComponent(mockHeroService);
  })

  describe('delete', ()=> {

    it('should remove the indicated hero from the heroes list', ()=>{
      //Arrange
      //of() method of rxjs is returning observable
      mockHeroService.deleteHero.and.returnValue(of(true))
      component.heroes = HEROES;
      //Act
      component.delete(HEROES[2]);
      //Assert
      expect(component.heroes.length).toBe(2);
    })
  })



})
