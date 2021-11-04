import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HeroComponent } from "./hero.component"

//Shallow Integration Testing for Hero Component
describe('HeroComponent (shallow tests)', ()=>{

  //To store return obj of createComponent used for test.
  let fixture;

  beforeEach(()=>{
    // Test Bed is to use integrate & test component.ts and .html files together.
    //First we Configure TestBed
    TestBed.configureTestingModule({
      // This configuration could be the same as we did it in App.Module

      // Option 1: Add import to resolve importedt module error
      // imports:[RouterModule],

      declarations:[HeroComponent],

      // Option 2:TO tell angular dont validate the schema or template of the component.
      schemas: [NO_ERRORS_SCHEMA]

      // providers:[],
      // bootstrap: []
    })

    // Second we create the test bed
    fixture = TestBed.createComponent(HeroComponent)

  })

  it('should have the correct hero', ()=>{
    //Arrange Act
    fixture.componentInstance.hero = {id:1, name:'SpiderDude', strength:8};
    fixture.detectChanges();
    //Assert
    expect(fixture.componentInstance.hero.name).toEqual('SpiderDude');
  })

  it('should render hero inside anchor tag inside HTML ', ()=>{
    //Arrange Act
    fixture.componentInstance.hero = {id:1, name:'SpiderDude', strength:8};
    // It is required to detect changes happen in DOM after component initiate and execute
    // the angular bindings.
    fixture.detectChanges();

    //Assert
    //nativeElement is similiar to DOM in plain old javascript
    // -> 'a' selecting anchor tag inside DOM.
    expect(fixture.nativeElement.querySelector('a').textContent).toContain('SpiderDude');
  })

  it('should render hero inside anchor tag inside HTML (Using debug element) ', ()=>{
    //Arrange Act
    fixture.componentInstance.hero = {id:1, name:'SpiderDude', strength:8};
    // It is required to detect changes happen in DOM after component initiate and execute
    // the angular bindings.
    fixture.detectChanges();

    //Assert
    // Similiar to directly aaccessing DOM using nativeElement we can access root
    // of template DOM using debugElement with some additioanl funtionlity.
    let debugAnchor = fixture.debugElement.query(By.css('a'));
    expect(debugAnchor.nativeElement.textContent).toContain('SpiderDude');
  })

})
