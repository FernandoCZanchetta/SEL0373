import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProjetoAmpereComponent } from './projeto-ampere.component'

describe('ProjetoAmpereComponent', () => {
  let component: ProjetoAmpereComponent
  let fixture: ComponentFixture<ProjetoAmpereComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetoAmpereComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoAmpereComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
