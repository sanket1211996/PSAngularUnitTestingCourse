import { NO_ERRORS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroesComponent } from "./heroes.component"

describe('Hereos Component Shallow Integration Test', ()=>{
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[HeroesComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })

    fixture = TestBed.createComponent(HeroesComponent);
  })

  it(' ', ()=>{

  })

})
