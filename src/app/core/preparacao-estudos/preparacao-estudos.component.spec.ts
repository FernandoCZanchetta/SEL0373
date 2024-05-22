import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PreparacaoEstudosComponent } from './preparacao-estudos.component'

describe('PreparacaoEstudosComponent', () => {
  let component: PreparacaoEstudosComponent
  let fixture: ComponentFixture<PreparacaoEstudosComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreparacaoEstudosComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparacaoEstudosComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
