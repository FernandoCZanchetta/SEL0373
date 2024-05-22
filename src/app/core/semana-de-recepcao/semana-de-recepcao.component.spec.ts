import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SemanaDeRecepcaoComponent } from './semana-de-recepcao.component'

describe('SemanaDeRecepcaoComponent', () => {
  let component: SemanaDeRecepcaoComponent
  let fixture: ComponentFixture<SemanaDeRecepcaoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SemanaDeRecepcaoComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanaDeRecepcaoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
